import React, { useState } from "react";
import { useContextStore } from "../../contexts/contextStore";

const WriterForm = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    author: "",
  });
  const { addPosts } = useContextStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.title && post.body) {
      addPosts(post);
      setPost({ title: "", body: "", author: "" });
    }
  };

  return (
    <div className="form-container flex-1 ">
      <h1 className="text-3xl text-center mb-4 font-semibold pb-4">
        Write your post
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="authors-field flex gap-4 mb-4">
          <label className="text-xl" htmlFor="authors">
            Author
          </label>
          <select
            name="author"
            id="author"
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            className="bg-transparent dark:text-zinc-100 
            border dark:border-zinc-100 p-1"
          >
            <option value="select author">Select author</option>
            <option
              className="dark:bg-slate-500 dark:text-white"
              value="Vicky k."
            >
              Vicky k.
            </option>
            <option
              className="dark:bg-slate-500 dark:text-white"
              value="Vikash"
            >
              Vikash
            </option>
            <option
              className="dark:bg-slate-500 dark:text-white"
              value="Mr. Pathak"
            >
              Mr Pathak
            </option>
            <option
              className="dark:bg-slate-500 dark:text-white"
              value="Mr. Ortho"
            >
              Mr. Ortho
            </option>
          </select>
        </div>
        <div className="title-field flex flex-col gap-2 mb-4">
          <label className="text-xl" htmlFor="title">
            Post's title
          </label>
          <input
            type="text"
            name="post-title"
            id="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="border outline-none bg-transparent px-3 py-2"
            placeholder="Write post title"
          />
        </div>
        <div className="post-body flex flex-col gap-2 mb-4">
          <label className="text-xl" htmlFor="post-body">
            Post
          </label>
          <textarea
            name="post-body"
            id="post-body"
            cols="30"
            rows="10"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            className="border outline-none bg-transparent px-3 py-2"
            placeholder="Write post body"
          ></textarea>
        </div>
        <button
          type="submit"
          className="border px-5 py-2 hover:dark:bg-white/50 hover:dark:text-black active:scale-75 transition-all"
        >
          Post blog
        </button>
      </form>
    </div>
  );
};

export default WriterForm;
