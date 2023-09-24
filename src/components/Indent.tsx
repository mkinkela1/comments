type Props = {
  id: string;
  timestamp: number;
  indent: number;
};

const Indent: React.FC<Props> = ({ id, timestamp, indent }) => {
  return (
    <>
      {Array.from({ length: indent - 1 }).map((_, index) => (
        <div
          key={`${timestamp}-${id}-${index}`}
          className="w-12 flex justify-end mr-3"
        ></div>
      ))}
      {indent > 0 && (
        <div
          key={`${timestamp}-${id}-${indent}`}
          className="w-12 flex justify-end mr-3"
        >
          <img
            src="img/response.svg"
            alt="first-response-icon"
            className="w-6 h-12"
          />
        </div>
      )}
    </>
  );
};

export default Indent;
