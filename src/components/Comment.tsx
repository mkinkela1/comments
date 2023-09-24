import Indent from "src/components/Indent";
import TextWithLinks from "src/components/TextWithLinks";
import { TComment } from "src/types/TComment";
import { getTimeFromTimestamp } from "src/utils/getTimeFromTimestamp";
import { isNotNullOrUndefined } from "../utils/isNullOrUndefined";

const Comment: React.FC<TComment> = ({
  id,
  parent_id,
  author: { name, picture },
  text,
  timestamp,
  isFirstReply,
  numberOfReplies = 0,
}) => {
  const indent = isNotNullOrUndefined(parent_id) ? +parent_id : 0;
  return (
    <div className="flex" key={`${timestamp}-${id}`}>
      <Indent
        id={id}
        timestamp={timestamp}
        indent={indent}
        isFirstReply={isFirstReply}
      />
      <div className="flex flex-row gap-3 pt-6">
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
              <TextWithLinks content={text} timestamp={timestamp} />
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
    </div>
  );
};

export default Comment;
