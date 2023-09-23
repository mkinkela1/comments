export type TComment = {
  id: string;
  author: {
    name: string;
    picture: string;
  };
  text: string;
  timestamp: number;
  numberOfReplies?: number;
};
