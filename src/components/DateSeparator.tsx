import { getDateFromTimestamp } from "src/utils/getDateFromTimestamp";

type Props = {
  timestamp: number;
};

const DateSeparator: React.FC<Props> = ({ timestamp }) => (
  <div className="flex w-full grow justify-center text-gray-700 leading-normal text-[0.8125rem] font-medium py-[1.125rem]">
    {getDateFromTimestamp(timestamp)}
  </div>
);

export default DateSeparator;
