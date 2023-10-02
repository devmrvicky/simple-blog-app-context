import React, { useEffect, useState } from "react";
import { Nav, Posts, WriterForm } from "./components";
import { ContextProvider, useContextStore } from "./contexts/contextStore";

const App = () => {
  const [posts, setPosts] = useState([]);
  const { initialPosts } = useContextStore();

  // create posts
  const addPosts = ({ title, body, author }) => {
    const newPost = {
      id: Date.now(),
      title,
      body,
      author,
      reactions: {
        like: 0,
        dislike: 0,
        love: 0,
        laugh: 0,
        angry: 0,
        thinking: 0,
        sad: 0,
      },
    };
    setPosts([newPost, ...posts]);
  };

  // change post's reaction counter
  const changeReactionsCounter = (post, reactionName) => {
    post.reactions[reactionName]++;
    const reactions = post.reactions;
    setPosts((prevPosts) =>
      prevPosts.map((prevPost) =>
        prevPost.id === post.id
          ? {
              ...prevPost,
              reactions,
            }
          : prevPost
      )
    );
  };

  // delete post
  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  // update post
  const updatePost = ({ id, title, body, author }) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, id, title, body, author } : post
      )
    );
  };

  // when component render first time set all posts to posts from context store
  useEffect(() => {
    if (initialPosts) {
      setPosts(initialPosts);
    }
  }, []);
  return (
    <ContextProvider
      value={{ posts, addPosts, changeReactionsCounter, deletePost }}
    >
      <div id="app">
        <Nav />
        <div className="blog-body p-3 dark:text-zinc-100 flex gap-10">
          <WriterForm />
          <Posts />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
