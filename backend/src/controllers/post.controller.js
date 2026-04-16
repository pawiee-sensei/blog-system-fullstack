import { createPost } from "../services/post.service.js";

export const create = async (req, res) => {
  try {
    const post = await createPost(req.body, req.user.id);

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    const statusCode = error.message === "Unauthorized" ? 401 : 400;

    res.status(statusCode).json({
      message: error.message || "Post creation failed",
    });
  }
};
