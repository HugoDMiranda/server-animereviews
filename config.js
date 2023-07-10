import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3001;

export const DB_HOST = process.env.DB_HOST || "aws.connect.psdb.cloud";
export const DB_USER = process.env.DB_USER || "zqmyez4gyydobfu3u16y";
export const DB_PASSWORD =
  process.env.DB_PASSWORD ||
  "pscale_pw_hsQQ4QOnCFUyFkrzj2pWbFNnmJMf10nqxQvHsiL9Aa3";
export const DB_DATABASE = process.env.DB_DATABASE || "animereviews";
export const DB_PORT = process.env.DB_PORT || 3306;
