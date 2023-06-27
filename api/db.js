import mysql from "mysql";
import "dotenv/config";

const SQL_PASSWORD = process.env.SQL_PASSWORD;
const SQL_HOST = process.env.SQL_HOST;

export const db = mysql.createConnection({
  host: SQL_HOST,
  user: "root",
  password: SQL_PASSWORD,
  database: "loginsys",
});
