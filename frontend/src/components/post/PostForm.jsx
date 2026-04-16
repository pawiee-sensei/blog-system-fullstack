import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../button/Button";
import Input from "../input/input";
import { createPost } from "../../services/postService";
import "./PostForm.css";

const PostForm = ({ onSuccess, onCancel }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const res = await createPost(form);

      setSuccess(res.data.message);
      setForm({
        title: "",
        content: "",
      });

      if (onSuccess) {
        onSuccess(res.data.post);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Post creation failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <Input
        name="title"
        placeholder="Post title"
        value={form.title}
        onChange={handleChange}
      />

      <textarea
        className="post-form-textarea"
        name="content"
        placeholder="Write your post content here"
        value={form.content}
        onChange={handleChange}
        rows="8"
        required
      />

      <div className="post-form-actions">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Post"}
        </Button>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
      </div>

      <Alert type="success" message={success} />
      <Alert type="error" message={error} />
    </form>
  );
};

export default PostForm;
