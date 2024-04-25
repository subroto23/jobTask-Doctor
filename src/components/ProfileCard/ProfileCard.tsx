import doctorImage from "../../assets/images/doctorImage.jpg";
import { LuGraduationCap } from "react-icons/lu";
import { BiMessageAltDetail } from "react-icons/bi";
import { HiMiniLink } from "react-icons/hi2";
import WithoutBacgroundButton from "../../utlis/Button/WithoutBacgroundButton";
import Button from "../../utlis/Button/Button";
const ProfileCard = () => {
  const profileCard = () => {
    return (
      <div className="bg-[#FFF7E2] border border-[#E3E3E3] shadow-md px-6 md:py-8 py-4 ">
        <img
          src={doctorImage}
          alt="Doctor Image"
          className="rounded-full mx-auto"
        />
        <div className="my-4">
          <h1 className="text-skin-secoundry md:text-3xl font-medium text-center">
            Dr. Prerna Narang
          </h1>
          <div>
            <div className="flex items-center gap-4 mt-2 ">
              <span>
                <HiMiniLink />
              </span>
              <span>Male-Female Infertility</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <span>
                <LuGraduationCap />
              </span>
              <span>7 years of Experience</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <span>
                <BiMessageAltDetail />
              </span>
              <span>Speaks: English, Hindi, Marathi</span>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 justify-center items-center my-6">
          <div className="border border-[#3A643B] p-2 rounded-md">
            <h1 className="text-skin secoundry text-[16px] font-bold">
              Video Consultation
            </h1>
            <p className="text-skin-primary font-bold text-center">₹800</p>
          </div>
          <div className="border border-[#3A643B] p-2 rounded-md">
            <h1 className="text-skin secoundry text-[16px] font-bold">
              Video Consultation
            </h1>
            <p className="text-skin-primary font-bold text-center">FREE</p>
          </div>
        </div>
        <div className="space-y-3">
          <WithoutBacgroundButton props={"View Profile"} style={"w-full"} />
          <Button props={"Book a consultation"} style={"w-full text-lg"} />
        </div>
      </div>
    );
  };
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8">
      {profileCard()}
      {profileCard()}
      {profileCard()}
    </div>
  );
};

export default ProfileCard;
