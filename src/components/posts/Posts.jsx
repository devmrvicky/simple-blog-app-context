import React from "react";
import ArticlePrev from "./ArticlePrev";
import { useContextStore } from "../../contexts/contextStore";

const Posts = () => {
  const { posts } = useContextStore();
  const articles = posts.length ? (
    posts.map((post) => (
      <div className="article-container" key={post.id}>
        <ArticlePrev post={post} />
      </div>
    ))
  ) : (
    <div className="text-center text-2xl py-5 italic">
      <p>You have not write any post yet.</p>
      <span className="text-gray-300 pt-3 text-xl">
        Pleas write a post. to write post use left hand side form. <br /> Thank
        you!
      </span>
    </div>
  );
  return (
    <div className="flex-1 dark:text-zinc-100 ">
      <h1 className="text-3xl text-center mb-4 font-semibold pb-4">
        Your recent posts
      </h1>
      <div className="posts flex flex-col gap-5 h-[500px] overflow-auto">
        {articles}
        {/* <ArticlePrev />
        <ArticlePrev />
        <ArticlePrev />
        <ArticlePrev />
        <ArticlePrev /> */}
      </div>
    </div>
  );
};

export default Posts;
