import pool from "../config/db.js";

export const createPost = async ({ title, content }, authorId) => {
  if (!authorId) {
    throw new Error("Unauthorized");
  }

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  const trimmedTitle = title.trim();
  const trimmedContent = content.trim();

  if (!trimmedTitle || !trimmedContent) {
    throw new Error("Title and content are required");
  }

  const [result] = await pool.query(
    "INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)",
    [authorId, trimmedTitle, trimmedContent]
  );

  const [posts] = await pool.query(
    `SELECT id, user_id, title, content, created_at, updated_at
     FROM posts
     WHERE id = ?`,
    [result.insertId]
  );

  return posts[0];
};
