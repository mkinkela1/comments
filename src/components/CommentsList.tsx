import Comment from "src/components/Comment";
import DateSeparator from "src/components/DateSeparator";
import { useComments } from "src/contexts/CommentsContext";
import { TComment } from "src/types/TComment";
import { getDateFromTimestamp } from "src/utils/getDateFromTimestamp";
import { isNotNullOrUndefined } from "src/utils/isNullOrUndefined";

const CommentsList: React.FC = () => {
  const { comments } = useComments();

  const showDateSeparator = (index: number, comment: TComment) => {
    if (index === 0) return true;

    if (comment.id === "1") {
      const previousComment = comments.find(
        (comment, prevIndex) => comment.id === "1" && prevIndex < index,
      );

      if (isNotNullOrUndefined(previousComment)) {
        return (
          getDateFromTimestamp(comment.timestamp) !==
          getDateFromTimestamp(previousComment.timestamp)
        );
      }
    }

    return false;
  };

  return (
    <>
      {comments.map((comment, index) => (
        <>
          {showDateSeparator(index, comment) && (
            <DateSeparator timestamp={comment.timestamp} />
          )}
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
        </>
      ))}
    </>
  );
};

export default CommentsList;
