import React from "react";
import CommentsList from "src/components/CommentsList";
import TextInput from "src/components/TextInput";
import { useComments } from "src/contexts/CommentsContext";

const App: React.FC = () => {
  const { addNewComment } = useComments();

  return (
    <div className="bg-gray-100 grow max-w-screen-lg max-h-[864px] rounded-lg flex flex-col">
      <div className="grow overflow-x-auto overflow-y-auto p-8 pt-4 mr-4 scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
        <CommentsList />
      </div>
      <div className="p-8 pt-0">
        <TextInput onSubmit={addNewComment} />
      </div>
    </div>
  );
};

export default App;
