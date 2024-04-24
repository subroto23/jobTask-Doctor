import { IoStarSharp } from "react-icons/io5";

const RatingStart = ({ props }: Record<string, number>) => {
  const ratingNumber = [...Array(Number(props)).keys()];
  const rating = ratingNumber?.map(() => (
    <IoStarSharp className="text-sm text-skin-icon-star  flex gap-1" />
  ));
  return rating;
};

export default RatingStart;
