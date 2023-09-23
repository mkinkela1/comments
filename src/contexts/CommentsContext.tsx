import React, { createContext, useContext, useEffect, useState } from "react";
import { TComment } from "src/types/TComment";
import { isNullOrUndefined } from "src/utils/isNullOrUndefined";

type TResponse = { data: { comments: TComment[] } };

type TCommentsContextContext = {
  comments: TComment[];
};

type TCommentsContextProviderProps = {
  children: React.ReactNode;
};

const CommentsContext = createContext<TCommentsContextContext | null>(null);

export const CommentsProvider: React.FC<TCommentsContextProviderProps> = ({
  children,
}) => {
  const [comments, setComments] = useState<TComment[]>([]);

  const fetchComments = async () => {
    try {
      const response = await fetch("comments.json");
      const comments = (await response.json()) as TResponse;

      console.log(comments);

      setComments(comments.data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <CommentsContext.Provider value={{ comments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = (): TCommentsContextContext => {
  const context = useContext(CommentsContext);

  if (isNullOrUndefined(context)) {
    throw new Error("useComments must be used within an CommentsProvider.");
  }

  return context;
};
