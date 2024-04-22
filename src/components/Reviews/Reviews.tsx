import TitleBasedSection from "../../utlis/SectionDecleration/TitleBasedSection";
import RatingStart from "../Rating/RatingStart";

const Reviews = () => {
  const handleReviews = () => {
    return (
      <>
        <div className="bg-[#FAFAFA] md:py-10 md:pl-4 md:pr-16 rounded-lg">
          <div className="grid md:grid-cols-6 grid-cols-1">
            <div className="">
              <img
                src="https://i0.wp.com/blog.publer.io/wp-content/uploads/2022/08/social-media-news-2022-08-17T091907.918.png?resize=1024%2C576&ssl=1"
                alt=""
                className="w-16 h-16 rounded-full object-cover saturate-200 border"
              />
            </div>
            <div className="space-y-4 col-span-3">
              <h1 className="text-skin-secoundry text-lg font-semibold">
                Alicent Hightower
              </h1>
              <span className="text-skin-muted mt-3 text-sm">
                Consulted for Skin care
              </span>
            </div>
            <div className="col-span-2 justify-self-end">
              <span className="text-skin-muted">20 January 2023</span>
            </div>
          </div>
          <div className="flex mt-6">
            <RatingStart props={5} />
          </div>
          <p className="text-sm text-skin-muted mt-2 leading-6">
            Might be bit early to confirm but yes I can see noticeable
            difference. will write again after using it for longer periods
          </p>
        </div>
      </>
    );
  };
  return (
    <TitleBasedSection title={"Featured Reviews (102)"}>
      <div className="space-y-6">
        {handleReviews()}
        {handleReviews()}
      </div>
    </TitleBasedSection>
  );
};

export default Reviews;
