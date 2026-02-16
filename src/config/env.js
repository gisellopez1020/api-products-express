import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT,
  appName: process.env.APP_NAME,
};
