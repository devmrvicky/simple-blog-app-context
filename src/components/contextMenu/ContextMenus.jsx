const ContextMenus = ({ axis, handleDeletePost }) => {
  const { x, y } = axis;
  return (
    <div
      className="border dark:bg-slate-500 dark:text-zinc-100 backdrop-blur-sm absolute top-0 left-0 flex flex-col p-1"
      style={{ top: y + "px", left: x + "px" }}
    >
      <button
        className="flex items-center gap-3 text-sm px-2 py-1 hover:dark:bg-slate-600"
        onClick={handleDeletePost}
      >
        <span className="icon text-xs">❌</span>
        <span>Delete article</span>
      </button>
      <button
        className="flex items-center gap-3 text-sm px-2 py-1 hover:dark:bg-slate-600"
        // onClick={handleDeletePost}
      >
        <span className="icon">✒️</span>
        <span>Update article</span>
      </button>
    </div>
  );
};

export default ContextMenus;
