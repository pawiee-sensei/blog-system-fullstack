import PostForm from "./PostForm";
import "./CreatePostModal.css";

const CreatePostModal = ({ isOpen, onClose, onPostCreated }) => {
  if (!isOpen) return null;

  const handleSuccess = (post) => {
    if (onPostCreated) {
      onPostCreated(post);
    }

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-post-title"
      >
        <div className="modal-header">
          <h2 id="create-post-title">Create Post</h2>
          <button className="modal-close" type="button" onClick={onClose}>
            X
          </button>
        </div>

        <PostForm onSuccess={handleSuccess} onCancel={onClose} />
      </div>
    </div>
  );
};

export default CreatePostModal;
