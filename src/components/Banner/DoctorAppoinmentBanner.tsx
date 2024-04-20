import coverImage from "../../assets/images/bannerBackground.png";
import doctorImage from "../../assets/images/doctor.png";
import { IoStarSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import Button from "../Button/Button";
const DoctorAppoinmentBanner = () => {
  return (
    <div className="md:mt-16 mb-8 mt-8 bg-gray-200 dark:bg-gray-800">
      <div className="bg-[#FFFBF2] shadow-lg  transform duration-200 easy-in-out relative">
        <div className=" h-32 overflow-hidden">
          <img className="w-full" src={coverImage} alt="Cover Image" />
        </div>
        <div className="py-4 grid md:grid-cols-4 grid-cols-1 items-center gap-4">
          {/* Profile Image */}
          <div className="justify-self-center -mt-12">
            <img
              className="h-40 w-40 bg-white rounded-full border-[10px] border-white"
              src={doctorImage}
              alt="Doctor Image"
            />
          </div>
          {/* Doctor Details */}
          <div className="md:justify-self-start justify-self-center">
            <h2 className="text-gray-800 text-xl font-bold flex gap-2 items-center">
              Dr. Bruce Willis
              <span className="text-blue-500">
                <MdVerified />
              </span>
            </h2>
            <p className="text-gray-400 text-lg hover:text-blue-500 ">
              Gynecologist
            </p>
            <p className="text-gray-500 text-sm flex gap-2 mt-1">
              4.2{" "}
              <span className="text-[#F79624] text-xl flex gap-1">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </span>
            </p>
          </div>

          {/* Social Media Status */}
          <div className="grid md:grid-cols-3 grid-cols-1 bg-gray-50 md:-ml-32 md:gap-1 gap-5">
            <div className="text-center hover:bg-gray-100 cursor-pointer flex flex-col items-center">
              <p className="text-[#3A643B]">Followers</p>
              <p className=" text-black font-bold">850</p>
            </div>
            <div className="text-center  hover:bg-gray-100 cursor-pointer flex flex-col items-center">
              <p className="text-[#3A643B]">Following</p>
              <span className=" text-black font-bold">18K</span>
            </div>
            <div className="text-center  hover:bg-gray-100 cursor-pointer flex flex-col items-center">
              <p className="text-[#3A643B]">Posts</p>
              <span className=" text-black font-bold">250</span>
            </div>
          </div>

          <div className="md:px-0 px-2">
            <Button props="Book an Appointment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppoinmentBanner;
