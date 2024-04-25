import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const SocialShare = () => {
  return (
    <div className="flex gap-2 text-sm px-4 md:py-6">
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-skin-icon-card hover:bg-base-200">
        <span>
          <FaFacebookF className="text-skin-primary text-sm hover:animate-spin" />
        </span>
      </div>
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-skin-icon-card hover:bg-base-200">
        <span>
          <FaInstagram className="text-skin-primary text-sm  hover:animate-spin" />
        </span>
      </div>
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-skin-icon-card hover:bg-base-200">
        <span>
          <CiYoutube className="text-skin-primary text-sm  hover:animate-spin" />
        </span>
      </div>
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-skin-icon-card hover:bg-base-200">
        <span>
          <CiTwitter className="text-skin-primary text-sm  hover:animate-spin" />
        </span>
      </div>
    </div>
  );
};

export default SocialShare;
