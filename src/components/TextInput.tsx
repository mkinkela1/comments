const TextInput: React.FC = () => {
  return (
    <div className="flex flex-row w-full bg-white border border-gray-300 rounded-lg p-2 gap-4">
      <button className="bg-blue hover:bg-blue-700 text-white rounded-lg">
        <img src="img/plus.svg" alt="plus" className="w-6 h-6 m-4" />
      </button>
      <input
        className="grow text-gray-900 text-lg font-medium leading-normal focus:outline-0"
        placeholder="Type a message..."
      />
      <button className="bg-blue hover:bg-blue-700 text-white rounded-lg flex flex-row items-center p-4">
        <img src="img/send.svg" alt="plus" className="w-6 h-6 mr-3" />
        <span className="font-semibold leading-normal text-base">
          Send message
        </span>
      </button>
    </div>
  );
};

export default TextInput;
