import DoctorAppoinmentBanner from "../components/Banner/DoctorAppoinmentBanner";
import DoctorProfileCard from "../components/DoctorProfile/DoctorProfileCard";
import SpecializeSection from "../components/SpecializeSection/SpecializeSection";

const FindDoctors = () => {
  return (
    <>
      <DoctorAppoinmentBanner />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <DoctorProfileCard />
          <SpecializeSection />
        </div>
      </div>
    </>
  );
};

export default FindDoctors;
