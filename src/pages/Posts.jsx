import React, { useEffect, useState, useRef } from "react";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import CreatePostModal from "../components/UI/modal/CreatePostModal";
import Button from "../components/UI/button/Button";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/Pagination/Pagination";
import Select from "../components/UI/select/Select";

import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";

import { getPageCount } from "../utils/pages";

import PostService from "../API/PostService";

import "../styles/App.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(entriesPerPage, currentPage);
    setPosts([...posts, ...response.data]);
    const totalEntriesCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalEntriesCount, entriesPerPage));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const lastElement = useRef();

  useObserver(lastElement, currentPage < totalPages, isPostsLoading, () => {
    setCurrentPage(currentPage + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [currentPage, entriesPerPage]);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = (delpost) => {
    setPosts(posts.filter((post) => post.id !== delpost.id));
  };

  const handleAddClick = () => {
    setModal(true);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="menu">
        <Button onClick={handleAddClick}>Добавить запись</Button>
        <CreatePostModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </CreatePostModal>

        <PostFilter filter={filter} setFilter={setFilter} />
        <Select
          value={entriesPerPage}
          onChange={(value) => setEntriesPerPage(value)}
          defaultValue="Количество подгружаемых постов"
          options={[
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 20, name: "20" },
          ]}
        />
      </div>

      {postError && <h2 style={{ textAlign: "center" }}>Ошибка {postError}</h2>}
      {isPostsLoading && <Loader />}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов 1"
      />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        changePage={changePage}
      />

      <div ref={lastElement} style={{ visibility: "hidden" }}></div>
    </div>
  );
};

export default Posts;
