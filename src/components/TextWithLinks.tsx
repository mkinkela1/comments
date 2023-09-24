import React from "react";

type Props = {
  content: string;
  timestamp: number;
};

const urlWithProtocolRegex =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/gm;

const urlWithoutProtocolRegex = /(^|[^/])(www\.[\S]+(\b|$))/gm;
const emailRegex = /(([a-zA-Z0-9\-_.])+@[a-zA-Z_]+?(\.[a-zA-Z]{2,6})+)/gm;

const TextWithLinks: React.FC<Props> = ({ content, timestamp }) => {
  const words = content.split(" ");

  const convertToAnchor = (word: string) => {
    if (word.match(urlWithoutProtocolRegex))
      return (
        <a
          className="text-blue text-lg font-medium leading-normal"
          href={`https://${word}`}
          target="_blank"
        >
          {word}
        </a>
      );
    if (word.match(urlWithProtocolRegex))
      return (
        <a
          className="text-blue text-lg font-medium leading-normal"
          href={word}
          target="_blank"
        >
          {word}
        </a>
      );
    if (word.match(emailRegex))
      return (
        <a
          className="text-blue text-lg font-medium leading-normal"
          href={`mailto:${word}`}
        >
          {word}
        </a>
      );

    return word + " ";
  };

  return (
    <>
      {words.map((word, idx) => (
        <React.Fragment key={`${word}-${idx}-${timestamp}`}>
          {convertToAnchor(word)}
        </React.Fragment>
      ))}
    </>
  );
};

export default TextWithLinks;
