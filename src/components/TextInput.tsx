import { useRef } from "react";
import { useComments } from "src/contexts/CommentsContext";
import { isNotEmpty } from "src/utils/isNotEmpty";
import { isNotNullOrUndefined } from "src/utils/isNullOrUndefined";

type Props = {
  onSubmit: (text: string) => void;
};

const TextInput: React.FC<Props> = ({ onSubmit }) => {
  const { replyTo, resetReplyTo } = useComments();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (inputRef.current) {
      if (isNotEmpty(inputRef.current.value)) {
        onSubmit(inputRef.current.value);
        inputRef.current.value = "";
        resetReplyTo();
      }
    }
  };

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    resetReplyTo();
  };

  return (
    <div className="flex flex-row w-full bg-white border border-gray-300 rounded-lg p-2 gap-4">
      <button className="bg-blue hover:bg-blue-700 text-white rounded-lg">
        <img src="img/plus.svg" alt="plus" className="w-6 h-6 m-4" />
      </button>
      <div className="flex grow">
        <input
          ref={inputRef}
          className="grow text-gray-900 text-lg font-medium leading-normal focus:outline-0"
          placeholder="Type a message..."
        />
      </div>
      <button
        className="bg-blue hover:bg-blue-700 text-white rounded-lg flex flex-row items-center p-4"
        onClick={handleSubmit}
      >
        <img src="img/send.svg" alt="plus" className="w-6 h-6 mr-3" />
        <span className="font-semibold leading-normal text-base">
          {isNotNullOrUndefined(replyTo)
            ? `Reply to ${replyTo.author.name}`
            : "Send message"}
        </span>
      </button>
      {isNotNullOrUndefined(replyTo) && (
        <button
          className="bg-gray-700 hover:bg-blue-700 text-white rounded-lg flex flex-row items-center p-4"
          onClick={handleReset}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default TextInput;
