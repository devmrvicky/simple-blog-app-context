import React, { useState } from "react";
import { useContextStore } from "../../contexts/contextStore";
import ContextMenus from "../contextMenu/ContextMenus";

const reactionsObj = {
  like: "👍",
  dislike: "👍",
  love: "❤️",
  laugh: "😊",
  angry: "😠",
  thinking: "🤔",
  sad: "😒",
};

const ArticlePrev = ({ post }) => {
  const [axis, setAxis] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [timeoutValue, setTimeoutValue] = useState("");
  const { title, body, author, reactions } = post;

  const { changeReactionsCounter, deletePost } = useContextStore();

  const handleClick = (reactionName) => {
    changeReactionsCounter(post, reactionName);
  };

  // let timeoutValue;
  const handleContextMenu = (e) => {
    e.preventDefault();
    clearTimeout(timeoutValue);

    const { offsetX, offsetY } = e.nativeEvent;
    setAxis({ x: offsetX, y: offsetY });
    setShowContextMenu(true);

    const id = setTimeout(() => {
      setShowContextMenu(false);
    }, 5000);
    setTimeoutValue(id);
  };

  // handle delete post
  const handleDeletePost = () => {
    deletePost(post.id);
  };

  const reactionBtns = Object.entries(reactions).map(
    ([reactionName, reactionCount]) => (
      <button
        key={reactionName}
        className="flex flex-col items-center"
        title={reactionName}
        onClick={() => handleClick(reactionName)}
      >
        <span
          className={`text-2xl hover:scale-110 transition-all active:scale-100 ${
            reactionName === "dislike" && "rotate-180"
          }`}
        >
          {reactionsObj[reactionName]}
        </span>
        {reactionCount > 0 && <span className="text-xs">{reactionCount}</span>}
      </button>
    )
  );
  return (
    <article
      className="border py-3 px-5 rounded-lg max-w-lg mx-auto hover:bg-zinc-100/5 cursor-pointer backdrop-blur-sm relative"
      onContextMenu={handleContextMenu}
    >
      {showContextMenu && (
        <ContextMenus axis={axis} handleDeletePost={handleDeletePost} />
      )}
      <h2 className="text-2xl">{title}</h2>
      <p className="py-2">{body}</p>
      <cite>
        by {author ? author : "unknown author"} <i>10 minutes ago</i>
      </cite>
      <div className="reactions-btns flex gap-3 pt-4">{reactionBtns}</div>
    </article>
  );
};

export default ArticlePrev;
