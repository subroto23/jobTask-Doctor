import { useState } from "react";
import DoctorAppoinmentBanner from "../components/Banner/DoctorAppoinmentBanner";
import ConcernsTreat from "../components/ConcernsTreat/ConcernsTreat";
import DoctorProfileCard from "../components/DoctorProfile/DoctorProfileCard";
import Reviews from "../components/Reviews/Reviews";
import { ModeSessionButton } from "../components/RightSide/ModeSession/ModeSessionButton";
import PickTimeSlot from "../components/RightSide/PickTime/PickTimeSlot";
import SpecializeSection from "../components/SpecializeSection/SpecializeSection";
import WorkAndExprience from "../components/WorkAndExpreince/WorkAndExprience";
import Button from "../utlis/Button/Button";

const FindDoctors = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  const handleButtonActive = (title: string, btnNumber: number) => {
    return (
      <>
        <div
          className={`${
            selectedButton === `button${btnNumber}`
              ? "text-white bg-skin-button-green border-[#3A643B] "
              : ""
          }  border border-skin-border-secoundry py-3 px-2 rounded-[19px]`}
          onClick={() => handleButtonClick(`button${btnNumber}`)}
        >
          <h1
            className={`text-skin-primary  text-[16px] md:text-sm text-center ${
              selectedButton === `button${btnNumber}`
                ? "text-white bg-skin-button-green border-[#3A643B] "
                : ""
            }`}
          >
            {title}
          </h1>
        </div>
      </>
    );
  };
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
            <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-between border-skin-border-secoundry border md:p-6 p-3 rounded-[19px]">
              <h1 className="text-sm text-skin-secoundry font-semibold text-center md:text-start">
                Appointment Fee
              </h1>
              <span className="text-skin-primary text-sm font-semibold justify-self-center md:justify-self-end">
                ₹699.00
              </span>
            </div>
            <div className="md:mt-8 mt-4 flex items-center md:gap-4">
              <h1 className="text-sm text-center md:text-start text-skin-secoundry font-semibold">
                Select your mode of session
              </h1>
              <hr className="border-2 border-[#E8E8E8] w-[50%] md:block hidden" />
            </div>
            {/*  */}
            <ModeSessionButton />
            <PickTimeSlot />
            <div className="mt-8">
              <h1 className="text-sm text-skin-secoundry font-semibold mb-4">
                Morning
              </h1>
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-y-2 gap-x-1">
                {handleButtonActive("09:00 AM", 1)}
                {handleButtonActive("09:30 AM", 2)}
                {handleButtonActive("10:00 AM", 3)}
                {handleButtonActive("10:15 AM", 4)}
                {handleButtonActive("10:45 AM", 5)}
                {handleButtonActive("11:00 AM", 6)}
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-sm text-skin-secoundry font-semibold mb-4">
                Evening
              </h1>
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-y-2 gap-x-1">
                {handleButtonActive("04:00 PM", 7)}
                {handleButtonActive("04:15 PM", 8)}
                {handleButtonActive("04:30 PM", 9)}
                {handleButtonActive("04:45 PM", 10)}
                {handleButtonActive("04:15 PM", 11)}
              </div>
            </div>
            <div className="mt-8">
              <Button
                props={"Make an appointment"}
                style="w-full md:text-sm text-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDoctors;
