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

export default router;
