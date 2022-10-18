import React from "react";
import Button from "./UI/button/Button";

import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();

  const { title, body, id } = props.post;
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}.{title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => navigate(`/posts/${id}`)}>Открыть</Button>
        <Button onClick={() => props.remove(props.post)}>Удалить</Button>
      </div>
    </div>
  );
};

export default PostItem;
