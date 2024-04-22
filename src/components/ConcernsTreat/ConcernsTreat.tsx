import TitleBasedSection from "../../utlis/SectionDecleration/TitleBasedSection";

const ConcernsTreat = () => {
  return (
    <TitleBasedSection title={"The Concerns I Treat"}>
      <div className="grid md:grid-cols-4 gap-x-3 gap-y-6">
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary font-semibold">
            Skin Treatment
          </span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary font-semibold">Pregnancy</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary font-semibold">Period Doubts</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary font-semibold">Endometriosis</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary font-semibold">Pelvic Pain</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary font-semibold">Ovarian Cysts</span>
        </div>
        <div className="bg-skin-specilist-btn text-center py-4 rounded-2xl">
          <span className="text-skin-primary font-semibold">+ 5 More</span>
        </div>
      </div>
    </TitleBasedSection>
  );
};

export default ConcernsTreat;
