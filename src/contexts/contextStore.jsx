import { useContext } from "react";
import { createContext } from "react";

// const reactions: {
//   like: "👍",
//   dislike: "👍",
//   love: "❤️",
//   laugh: "😊",
//   angry: "😠",
//   thinking: "🤔",
//   sad: "😒",
// };

const ContextStore = createContext({
  initialPosts: [
    {
      id: 5,
      title: "Post title",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatum eaque tenetur eos atque aliquid voluptas iusto recusandae, corporis ab?",
      reactions: {
        like: 0,
        dislike: 0,
        love: 0,
        laugh: 0,
        angry: 0,
        thinking: 0,
        sad: 0,
      },
    },
  ],
});

export const useContextStore = () => {
  return useContext(ContextStore);
};

export const ContextProvider = ContextStore.Provider;
