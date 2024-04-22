import TitleBasedSection from "../../utlis/SectionDecleration/TitleBasedSection";
import womenHealth from "../../assets/images/women-helth.png";
import skinCare from "../../assets/images/skin-care.png";
import Immunity from "../../assets/images/Immunity.png";
import HairCare from "../../assets/images/HairCare.jpg";

const SpecializeSection = () => {
  return (
    <TitleBasedSection title={"I Specialize In"}>
      <div className="flex flex-wrap gap-1">
        <div className="border-skin-border-primary p-2 flex flex-col justify-center">
          <img src={womenHealth} className="w-32 h-32" />
          <p className="text-center text-skin-primary py-2">women’s health</p>
        </div>

        <div className=" border-skin-border-primary p-2 flex flex-col justify-center">
          <img src={skinCare} className="w-32 h-32" />
          <p className="text-center text-skin-primary py-2">Skin Care</p>
        </div>
        <div className=" border-skin-border-primary p-2 flex flex-col justify-center">
          <img src={Immunity} className="w-32 h-32" />
          <p className="text-center text-skin-primary py-2">Immunity</p>
        </div>
        <div className=" border-skin-border-primary p-2 flex flex-col justify-center">
          <img src={HairCare} className="w-32 h-32 rounded-xl" />
          <p className="text-center text-skin-primary py-2">Hair care</p>
        </div>
      </div>
    </TitleBasedSection>
  );
};

export default SpecializeSection;
