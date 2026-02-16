import express from "express";
import { config } from "./config/env.js";
import { requestLogger } from "./middlewares/logger.js";
import router from "./routes/items.js";

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use("/items", router);
app.use(express.static("public"));

app.use("/api/items", router);

app.listen(config.port, () => {
  console.log(
    `${config.appName} is running on http://localhost:${config.port}`,
  );
});
