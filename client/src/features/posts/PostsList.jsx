import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from the API
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const posts = await response.json();
          setPosts(posts);
        }
        else {
          throw response;
        }
      } catch (e) {
        setError('An error occured!');
        console.log('An error occured!', e);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className='post-container'>
          <h2>
            <Link to={`/posts/${post.id}`} className="post-title">
              {post.title}</Link>
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;