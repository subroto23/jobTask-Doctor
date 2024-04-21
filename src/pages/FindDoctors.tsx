import DoctorAppoinmentBanner from "../components/Banner/DoctorAppoinmentBanner";
import TitleBasedCard from "../components/Card/TitleBasedCard";

const FindDoctors = () => {
  return (
    <>
      <DoctorAppoinmentBanner />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <TitleBasedCard />
      </div>
    </>
  );
};

export default FindDoctors;
