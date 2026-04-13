import pool from "../config/db.js";

export const checkHealth = async () => {
  const [rows] = await pool.query("SELECT 1 AS test");

  return {
    status: "OK",
    db: rows[0].test === 1 ? "CONNECTED" : "FAILED",
    timestamp: new Date(),
  };
};