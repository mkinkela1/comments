import React from "react";
import Comment from "src/components/Comment";
import TextInput from "src/components/TextInput";
import { useComments } from "src/contexts/CommentsContext";

const App: React.FC = () => {
  const { comments, addNewComment } = useComments();

  return (
    <div className="bg-gray-100 grow max-w-screen-lg max-h-[864px] rounded-lg flex flex-col">
      <div className="grow overflow-x-auto overflow-y-auto p-8 mr-4 scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
        {comments.map((comment, index) => (
          <Comment
            key={`comment-${comment.id}-${comment.author.name}-${comment.timestamp}`}
            id={comment.id}
            parent_id={comment.parent_id}
            author={comment.author}
            text={comment.text}
            timestamp={comment.timestamp}
            isFirstReply={comment.isFirstReply}
            index={index}
            numberOfReplies={comment.numberOfReplies}
          />
        ))}
      </div>
      <div className="p-8 pt-0">
        <TextInput onSubmit={addNewComment} />
      </div>
    </div>
  );
};

export default App;
