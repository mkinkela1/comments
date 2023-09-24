import React from "react";
import Comment from "src/components/Comment";
import TextInput from "src/components/TextInput";
import { useComments } from "src/contexts/CommentsContext";

const App: React.FC = () => {
  const { comments } = useComments();

  return (
    <div className="bg-gray-100 grow max-w-screen-lg max-h-[864px] p-8 rounded-lg overflow-x-auto flex flex-col">
      {comments.map((comment) => (
        <Comment
          key={`comment-${comment.id}-${comment.author.name}-${comment.timestamp}`}
          id={comment.id}
          parent_id={comment.parent_id}
          author={comment.author}
          text={comment.text}
          timestamp={comment.timestamp}
          isFirstReply={comment.isFirstReply}
          numberOfReplies={comment.numberOfReplies}
        />
      ))}
      <TextInput />
    </div>
  );
};

export default App;
