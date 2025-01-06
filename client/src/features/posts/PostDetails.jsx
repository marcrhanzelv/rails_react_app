import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import { deletePost, fetchPost, fetchAllPosts } from '../../../services/postService';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const data = await fetchPost(id);
        setPost(data);
      } catch (e) {
        console.error('An error occured!', e);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const deletePostHandler = async () => {
    try {
      await deletePost(post.id);
      navigate('/');
    } catch (e) {
      console.error('An error occured!', e);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${id}/edit`}>Edit</Link>
      {" | "}
      <Link to="/">Back to Posts</Link>
      {" | "}
      <button onClick={deletePostHandler}>Delete</button>
    </div>
  );
}

export default PostDetails;