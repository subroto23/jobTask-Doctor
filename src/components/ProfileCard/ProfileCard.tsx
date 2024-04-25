import doctorImage from "../../assets/images/doctorImage.jpg";
import { LuGraduationCap } from "react-icons/lu";
import { BiMessageAltDetail } from "react-icons/bi";
import { HiMiniLink } from "react-icons/hi2";
const ProfileCard = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8">
      <div className="bg-[#FFF7E2] border border-[#E3E3E3] shadow-md px-6 py-8">
        <img
          src={doctorImage}
          alt="Doctor Image"
          className="rounded-full mx-auto"
        />
        <div className="my-4">
          <h1 className="text-skin-secoundry text-3xl font-medium text-center">
            Dr. Prerna Narang
          </h1>
          <div>
            <div className="flex items-center gap-4 mt-2">
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
            <p className="text-skin-primary font-bold text-center">₹800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
