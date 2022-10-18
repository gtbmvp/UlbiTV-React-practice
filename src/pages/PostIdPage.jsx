import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";

import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>
            {post.id}.{post.title}
          </h1>
        </div>
      )}
      <hr />
      <h2> Комментарии </h2>
      {isComLoading ? (
        <Loader />
      ) : (
        comments.map((com) => (
          <div key={com.id} style={{ marginTop: 15 }}>
            <h5>{com.email}</h5>
            <div>{com.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostIdPage;
