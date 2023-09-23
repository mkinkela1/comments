import { TComment } from "src/types/TComment";

const Comment: React.FC<TComment> = ({
  id,
  author: { name, picture },
  text,
  timestamp,
  numberOfReplies = 0,
}) => {
  const getTimeFromTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const hoursWithLeadingZero = String(hours).padStart(2, "0");
    const minutesWithLeadingZero = String(minutes).padStart(2, "0");

    return `${hoursWithLeadingZero}:${minutesWithLeadingZero} ${ampm}`;
  };

  return (
    <div className="flex gap-3" key={`${timestamp}-${id}`}>
      <img
        src={picture}
        alt={`${name}'s profile picture`}
        className="w-12 h-12 rounded-full border border-white"
      />
      <div className="flex flex-col gap-3">
        <div className="bg-white p-6 rounded-lg border border-gray-300 w-full flex flex-col gap-3">
          <div className="text-gray-900 text-lg font-semibold leading-normal">
            {name}
          </div>
          <div className="text-gray-700 text-lg font-medium leading-normal">
            {text}
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="text-gray-700 text-base font-medium leading-normal">
            {getTimeFromTimestamp(timestamp)}
          </div>
          <div className="text-blue text-base font-medium leading-normal">
            Reply {numberOfReplies > 0 && `(${numberOfReplies})`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
