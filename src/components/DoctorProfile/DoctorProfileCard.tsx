import WithoutBacgroundButton from "../../utlis/Button/WithoutBacgroundButton";
import SocialShare from "../SocialShare/SocialShare";
import { FaPlus } from "react-icons/fa6";

const DoctorProfileCard = () => {
  return (
    <div className="border border-[#DCDCDC] rounded-[15px_18px] text-skin-secoundry pb-4">
      <div className="rounded-[15px_18px_0px_0px] bg-gradient-to-tr from-skin-gradent-start via-skin-gradent-center to-skin-gradent-end md:py-6 py-3 px-4 font-semibold flex md:justify-between justify-center items-center flex-wrap gap-3">
        <span className="text-sm tracking-wider text-skin-primary">
          A Little About me
        </span>
        <WithoutBacgroundButton
          props={"Follow"}
          icon={<FaPlus className="text-sm" />}
        />
      </div>
      <div className="text-skin-muted p-4">
        <p className="text-justify text-md py-5 ">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the
        </p>
        <div className="flex justify-center items-center gap-2 py-2">
          <hr className="md:w-[70%] w-[40%] border border-[#797979]" />
          <button className="font-semibold text-skin-strong-text underline">
            Read More
          </button>
        </div>
      </div>
      <div className="px-4 grid md:grid-cols-6 grid-cols-2 gap-2 items-center py-4">
        <h2 className="text-skin-secoundry font-bold text-sm col-span-3 tracking-widest">
          Language Spoken
        </h2>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span>English</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span>Hindi</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span>Telugu</span>
        </div>
      </div>
      <SocialShare />
    </div>
  );
};

export default DoctorProfileCard;
