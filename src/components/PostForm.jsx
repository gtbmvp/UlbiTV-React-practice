import React, { useState } from "react";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form className="post__form">
      <Input
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="title"
      />
      <Input
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        type="text"
        placeholder="Description"
      />

      <Button onClick={addNewPost}> Create post </Button>
    </form>
  );
};

export default PostForm;
