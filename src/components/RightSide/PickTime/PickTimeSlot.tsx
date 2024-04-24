import { MdOutlineCalendarToday } from "react-icons/md";
import HoeizontialScrollingCard from "../HorizentalScrollinfgCard/HoeizontialScrollingCard";

const PickTimeSlot = () => {
  return (
    <div>
      <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
        <h1 className="text-sm text-skin-secoundry font-semibold text-center md:text-start">
          Pick a Time slot
        </h1>
        <hr className="border-2 border-[#E8E8E8]  w-[55%] md:block hidden" />
        <div className=" hidden border-2 border-skin-border-secoundry rounded-full w-12 h-12 md:flex items-center justify-center">
          <span>
            <MdOutlineCalendarToday className="text-sm" />
          </span>
        </div>
        {/* Carosol Button */}
      </div>
      <div className="flex items-center justify-between border-skin-border-secoundry border p-6 rounded-[19px] mt-6">
        <HoeizontialScrollingCard />
      </div>
    </div>
  );
};

export default PickTimeSlot;
