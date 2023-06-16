import mysql from "mysql";
import {
  DB_HOST,
  DB_DATABASE,
  DB_PASSWORD,
  DB_USER,
  DB_PORT,
} from "./config.js";

export const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
