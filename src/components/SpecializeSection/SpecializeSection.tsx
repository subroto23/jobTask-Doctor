import TitleBasedSection from "../../utlis/SectionDecleration/TitleBasedSection";
import womenHealth from "../../assets/images/women-helth.png";
import skinCare from "../../assets/images/skin-care.png";
import Immunity from "../../assets/images/Immunity.png";
import HairCare from "../../assets/images/HairCare.jpg";

const SpecializeSection = () => {
  return (
    <TitleBasedSection title={"I Specialize In"}>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-1">
        <div className="border-skin-border-primary p-2 flex flex-col justify-center">
          <img src={womenHealth} className="w-24 h-24" />
          <p className="text-center text-skin-primary py-2 text-sm">Health</p>
        </div>

        <div className="border-skin-border-primary p-2 flex flex-col justify-center">
          <img src={skinCare} className="w-24 h-24" />
          <p className="text-center text-skin-primary py-2 text-sm">
            Skin Care
          </p>
        </div>
        <div className=" border-skin-border-primary p-2 flex flex-col justify-center">
          <img src={Immunity} className="w-24 h-24" />
          <p className="text-center text-skin-primary py-2 text-sm">Immunity</p>
        </div>
        <div className=" border-skin-border-primary p-2 flex flex-col justify-center">
          <img src={HairCare} className="w-24 h-24" />
          <p className="text-center text-skin-primary py-2 text-sm">
            Hair care
          </p>
        </div>
      </div>
    </TitleBasedSection>
  );
};

export default SpecializeSection;
