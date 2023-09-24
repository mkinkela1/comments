export type TComment = {
  id: string;
  parent_id?: string;
  author: {
    name: string;
    picture: string;
  };
  text: string;
  timestamp: number;
  numberOfReplies?: number;
  isFirstReply?: boolean;
};
