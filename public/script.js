let editingItemId = null;

async function loadItems() {
  const response = await fetch("/api/items");
  const items = await response.json();
  const container = document.getElementById("list");

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No hay productos aún</p>
        <small>Agrega tu primer producto usando el formulario</small>
      </div>
    `;
    return;
  }

  container.innerHTML = items
    .map(
      (i) =>
        `<div class="item">
          <div class="item-content">
            <strong>${i.name}</strong>
            <p>${i.description}</p>
            <p>Precio: $${i.price}</p>
            <small>ID: ${i.id}</small>
          </div>
          <div class="item-actions">
            <button class="btn-edit" onclick="editItem(${i.id}, '${i.name.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${i.description.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', ${i.price})">Editar</button>
            <button class="btn-delete" onclick="deleteItem(${i.id})">Eliminar</button>
          </div>
        </div>`,
    )
    .join("");
}

function editItem(id, name, description, price) {
  editingItemId = id;
  document.getElementById("item-name").value = name;
  document.getElementById("item-description").value = description;
  document.getElementById("item-price").value = price;

  const button = document.getElementById("submit-btn");
  button.textContent = "Actualizar producto";
  button.onclick = updateItem;

  document.getElementById("cancel-btn").style.display = "block";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function updateItem() {
  if (!editingItemId) return;

  const name = document.getElementById("item-name").value;
  const description = document.getElementById("item-description").value;
  const price = document.getElementById("item-price").value;

  if (!name || !description || !price) {
    alert("Por favor completa todos los campos");
    return;
  }

  await fetch(`/api/items/${editingItemId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description, price: parseFloat(price) }),
  });

  resetForm();
  await loadItems();
}

async function deleteItem(id) {
  if (!confirm("¿Estás seguro de que deseas eliminar este producto?")) {
    return;
  }

  await fetch(`/api/items/${id}`, {
    method: "DELETE",
  });

  if (editingItemId === id) {
    resetForm();
  }

  await loadItems();
}

async function addItem() {
  const name = document.getElementById("item-name").value;
  const description = document.getElementById("item-description").value;
  const price = document.getElementById("item-price").value;

  if (!name || !description || !price) {
    alert("Por favor completa todos los campos");
    return;
  }

  await fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description, price: parseFloat(price) }),
  });

  resetForm();
  await loadItems();
}

function resetForm() {
  editingItemId = null;
  document.getElementById("item-name").value = "";
  document.getElementById("item-description").value = "";
  document.getElementById("item-price").value = "";

  const button = document.getElementById("submit-btn");
  button.textContent = "Agregar producto";
  button.onclick = addItem;

  document.getElementById("cancel-btn").style.display = "none";
}

loadItems();
