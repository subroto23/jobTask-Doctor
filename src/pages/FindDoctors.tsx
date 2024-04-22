import DoctorAppoinmentBanner from "../components/Banner/DoctorAppoinmentBanner";
import ConcernsTreat from "../components/ConcernsTreat/ConcernsTreat";
import DoctorProfileCard from "../components/DoctorProfile/DoctorProfileCard";
import Reviews from "../components/Reviews/Reviews";
import SpecializeSection from "../components/SpecializeSection/SpecializeSection";
import WorkAndExprience from "../components/WorkAndExpreince/WorkAndExprience";

const FindDoctors = () => {
  return (
    <>
      <DoctorAppoinmentBanner />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-16">
        <div>
          <DoctorProfileCard />
          <SpecializeSection />
          <ConcernsTreat />
          <WorkAndExprience />
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default FindDoctors;
