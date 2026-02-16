import { Router } from "express";
import fs from "fs/promises";

const router = Router();
const DB_PATH = "data/database.json";

const readDB = async () => {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
};

router.get("/", async (req, res) => {
  const data = await readDB();
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = await readDB();
  const newItem = {
    id: Date.now(),
    ...req.body,
  };
  data.push(newItem);
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
  res.status(201).json(newItem);
});

router.put("/:id", async (req, res) => {
  const data = await readDB();
  const itemId = parseInt(req.params.id, 10);
  const itemIndex = data.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  data[itemIndex] = { ...data[itemIndex], ...req.body };
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
  res.json(data[itemIndex]);
});

router.delete("/:id", async (req, res) => {
  const data = await readDB();
  const itemId = parseInt(req.params.id, 10);
  const itemIndex = data.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  const deletedItem = data.splice(itemIndex, 1)[0];
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
  res.json(deletedItem);
});

export default router;
