import { useState } from "react";
import Button from "../../components/button/Button";
import CreatePostModal from "../../components/post/CreatePostModal";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const handlePostCreated = (post) => {
    setPosts((currentPosts) => [post, ...currentPosts]);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome, {user?.username}!</p>
        </div>

        <Button type="button" onClick={() => setIsCreateModalOpen(true)}>
          Create Post
        </Button>
      </div>

      <section className="dashboard-posts">
        <h2>Your New Posts</h2>

        {posts.length === 0 ? (
          <p className="dashboard-empty">
            No posts created yet. Click "Create Post" to add one.
          </p>
        ) : (
          <ul className="dashboard-post-list">
            {posts.map((post) => (
              <li key={post.id} className="dashboard-post-item">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onPostCreated={handlePostCreated}
      />
    </div>
  );
};

export default Dashboard;
