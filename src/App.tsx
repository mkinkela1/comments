import React from "react";
import Comment from "src/components/Comment";
import { useComments } from "src/contexts/CommentsContext";

const App: React.FC = () => {
  const { comments } = useComments();

  return (
    <div className="bg-gray-100 grow max-w-screen-lg max-h-[864px] p-8 rounded-lg overflow-x-auto">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          author={comment.author}
          text={comment.text}
          timestamp={comment.timestamp}
          numberOfReplies={comment.numberOfReplies}
        />
      ))}
    </div>
  );
};

export default App;
