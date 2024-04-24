import coverImage from "../../assets/images/bannerBackground.png";
import doctorImage from "../../assets/images/doctor.png";
import { MdVerified } from "react-icons/md";
import Button from "../../utlis/Button/Button";
import RatingStart from "../Rating/RatingStart";
const DoctorAppoinmentBanner = () => {
  return (
    <div className="bg-skin-banner md:mt-10 mb-8 mt-2 dark:bg-gray-800">
      <div className="bg-skin-banner shadow-lg transform duration-200 easy-in-out relative">
        <div className="h-32 overflow-hidden">
          <img className="w-full" src={coverImage} alt="Cover Image" />
        </div>
        <div className="py-4 grid md:grid-cols-8 grid-cols-1 items-center gap-4 md:pl-4">
          {/* Profile Image */}
          <div className="justify-self-center -mt-12 md:col-span-1 col-span-2">
            <img
              className="h-32 w-32 bg-white rounded-full border-[10px] border-white"
              src={doctorImage}
              alt="Doctor Image"
            />
          </div>
          {/* Doctor Details */}
          <div className="md:justify-self-start justify-self-center col-span-2 md:pl-0 pl-6">
            <h2 className="text-skin-secoundry text-sm font-bold flex gap-2 items-center">
              Dr. Bruce Willis
              <span className="text-blue-500">
                <MdVerified />
              </span>
            </h2>
            <p className="text-skin-muted text-sm">Gynecologist</p>
            <p className="text-skin-secoundry text-sm flex gap-2 mt-1">
              4.2 <RatingStart props={4} />
            </p>
          </div>
          {/* Social Media Status */}
          <div className="col-span-3 md:px-16">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-16 gap-8 justify-center ">
              <div className="text-center cursor-pointer flex flex-col items-center">
                <p className="text-skin-primary">Followers</p>
                <p className=" text-skin-secoundry font-bold">850</p>
              </div>
              <div className="text-center cursor-pointer flex flex-col items-center">
                <p className="text-skin-primary">Following</p>
                <span className="text-skin-secoundry font-bold">18K</span>
              </div>
              <div className="text-center cursor-pointer flex flex-col items-center">
                <p className="text-skin-primary">Posts</p>
                <span className="text-skin-secoundry font-bold">250</span>
              </div>
            </div>
          </div>

          <div className="md:px-0 px-2 col-span-2 justify-center flex">
            <Button props="Book an Appointment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppoinmentBanner;
