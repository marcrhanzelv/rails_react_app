import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updatePost, fetchPost } from "../../../services/postService";
import PostForm from "./PostForm";

function PostEditForm() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the post with the given ID
    const fetchCurrentPost = async () => {
      try {
        const json = await fetchPost(id);
        setPost(json);
      } catch (e) {
        console.error("An error occurred!", e);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const handleUpdateSubmit = async (formData) => {
    try {
      const response = await updatePost(id, formData);
      navigate(`/posts/${response.id}`);
    } catch (e) {
      console.error("An error occurred!", e);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <PostForm
      post={post}
      headerText="Edit Post"
      onSubmit={handleUpdateSubmit}
      buttonText="Update Post" />
  );
}

export default PostEditForm;