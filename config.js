import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3001;

export const DB_HOST = process.env.DB_HOST || "aws.connect.psdb.cloud";
export const DB_USER = process.env.DB_USER || "wwtkqtroumamtsr2gf4k";
export const DB_PASSWORD =
  process.env.DB_PASSWORD ||
  "pscale_pw_yIywIceSofmbyAtvO1xtftmoCC0nDPgJ8ybqjiVVKA6";
export const DB_DATABASE = process.env.DB_DATABASE || "animereviews";
export const DB_PORT = process.env.DB_PORT || 3306;
