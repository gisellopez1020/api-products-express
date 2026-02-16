async function loadItems() {
  const response = await fetch("/api/items");
  const items = await response.json();
  const container = document.getElementById("list");
  container.innerHTML = items
    .map(
      (i) =>
        `<div class="item">
          <h3>${i.name}</h3>
          <small>ID: ${i.id}</small>
          <p>${i.description}</p>
          <p>Precio: $${i.price}</p>
        </div>`,
    )
    .join("");
}

async function addItem() {
  const name = document.getElementById("item-name").value;
  const description = document.getElementById("item-description").value;
  const price = document.getElementById("item-price").value;
  await fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description, price }),
  });
  await loadItems();
}

loadItems();
