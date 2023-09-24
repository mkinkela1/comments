import React, { createContext, useContext, useEffect, useState } from "react";
import { TComment } from "src/types/TComment";
import {
  isNotNullOrUndefined,
  isNullOrUndefined,
} from "src/utils/isNullOrUndefined";

type TResponse = { data: { comments: TComment[] } };

type TReply = Pick<TComment, "id" | "parent_id" | "author"> & {
  replyIndex: number;
};

type TCommentsContextContext = {
  comments: TComment[];
  addNewComment: (text: string) => void;
  replyTo: TReply | null;
  setReplyTo: (val: TReply) => void;
  resetReplyTo: () => void;
};

type TCommentsContextProviderProps = {
  children: React.ReactNode;
};

const CommentsContext = createContext<TCommentsContextContext | null>(null);

export const CommentsProvider: React.FC<TCommentsContextProviderProps> = ({
  children,
}) => {
  const [comments, setComments] = useState<TComment[]>([]);
  const [replyTo, _setReplyTo] = useState<TReply | null>(null);

  const fetchComments = async () => {
    try {
      const response = await fetch("comments.json");
      const comments = (await response.json()) as TResponse;

      updateComments(comments.data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  const updateComments = (comments: TComment[]) => {
    setComments(
      comments.map((comment, index) => ({
        ...comment,
        isFirstReply: comment.parent_id === comments[index - 1]?.id,
      })),
    );
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const setReplyTo = (replyTo: TReply | null) => {
    if (isNullOrUndefined(replyTo)) {
      _setReplyTo(null);
    } else {
      let replyIndex = replyTo.replyIndex + 1;

      // find next index for placing the reply
      for (
        ;
        replyIndex < comments.length && +comments[replyIndex].id > +replyTo.id;
        replyIndex++
      );

      _setReplyTo({
        ...replyTo,
        replyIndex,
      });
    }
  };

  const addNewComment = (text: string) => {
    const id = isNotNullOrUndefined(replyTo?.id)
      ? `${parseInt(replyTo?.id) + 1}`
      : "1";
    const parent_id = replyTo?.id ?? undefined;

    const newComment: TComment = {
      id,
      parent_id,
      author: {
        name: "Matteo Kinkela",
        picture: "img/avatar-mk.webp",
      },
      text,
      timestamp: Date.now(),
    };

    if (isNotNullOrUndefined(replyTo)) {
      const newComments = [...comments];
      newComments.splice(replyTo.replyIndex, 0, newComment);
      updateComments(newComments);
    } else {
      updateComments([...comments, newComment]);
    }
  };

  const resetReplyTo = () => {
    _setReplyTo(null);
  };

  return (
    <CommentsContext.Provider
      value={{ comments, addNewComment, replyTo, setReplyTo, resetReplyTo }}
    >
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
