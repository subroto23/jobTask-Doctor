import TitleBasedSection from "../../utlis/SectionDecleration/TitleBasedSection";

const ConcernsTreat = () => {
  return (
    <TitleBasedSection title={"The Concerns I Treat"}>
      <div className="grid md:grid-cols-4 gap-x-3 gap-y-6">
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary text-base">
            Treatment
          </span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary text-base ">Pregnancy</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary text-base ">Period</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary text-base ">Endometro</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary text-base ">Pelvic Pain</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary text-base ">Ovarian</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary text-base ">+ 5 More</span>
        </div>
      </div>
    </TitleBasedSection>
  );
};

export default ConcernsTreat;
