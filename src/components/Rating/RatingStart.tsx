import { IoStarSharp } from "react-icons/io5";

const RatingStart = ({ props }: Record<string, number>) => {
  const ratingNumber = [...Array(Number(props)).keys()];
  const rating = ratingNumber?.map(() => (
    <span className="text-skin-icon-star text-xl flex gap-1">
      {" "}
      <IoStarSharp />
    </span>
  ));
  return rating;
};

export default RatingStart;
