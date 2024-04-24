import DoctorAppoinmentBanner from "../components/Banner/DoctorAppoinmentBanner";
import ConcernsTreat from "../components/ConcernsTreat/ConcernsTreat";
import DoctorProfileCard from "../components/DoctorProfile/DoctorProfileCard";
import Reviews from "../components/Reviews/Reviews";
import { ModeSessionButton } from "../components/RightSide/ModeSession/ModeSessionButton";
import PickTimeSlot from "../components/RightSide/PickTime/PickTimeSlot";
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
        {/* Right Side Bar */}
        <div>
          <div className=" border-skin-border-secoundry border p-6 rounded-[19px]">
            <div className="flex items-center justify-between border-skin-border-secoundry border p-6 rounded-[19px]">
              <h1 className="text-xl text-skin-secoundry font-semibold">
                Appointment Fee
              </h1>
              <span className="text-skin-primary text-xl font-semibold">
                ₹699.00
              </span>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <h1 className="text-lg text-skin-secoundry font-semibold">
                Select your mode of session
              </h1>
              <hr className="border-2 border-[#E8E8E8] w-[30%]" />
            </div>
            {/*  */}
            <ModeSessionButton />
            <PickTimeSlot />
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDoctors;
