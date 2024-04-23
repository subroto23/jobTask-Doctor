import TitleBasedSection from "../../utlis/SectionDecleration/TitleBasedSection";
import { MdOutlineHomeWork } from "react-icons/md";

const WorkAndExprience = () => {
  const exprienceInfoCreating = (
    title: string,
    degistation: string,
    joiningDate: string
  ) => {
    return (
      <>
        <div className=" bg-skin-icon-card h-20 w-20 rounded-md flex justify-center items-center">
          <span>
            <MdOutlineHomeWork className="text-[#2E37A4] text-5xl" />
          </span>
        </div>
        <div className="col-span-3">
          <h1 className="text-skin-secoundry text-lg font-semibold mb-3">
            {title}
          </h1>
          <span className="text-skin-muted">{degistation}</span>
        </div>
        <div className="self-start">
          <span className="text-skin-muted">{joiningDate}</span>
        </div>
      </>
    );
  };
  return (
    <TitleBasedSection title={"My Work Experience"}>
      <div className="space-y-10 mb-8">
        <h1 className="text-skin-primary text-2xl font-semibold">
          I have been in practice for : 7+ Years
        </h1>
        <hr className="w-[80%] border-skin-border-primary" />
      </div>
      <div className="grid md:grid-cols-5 gap-y-12">
        {exprienceInfoCreating(
          "Midtown Medical Clinic",
          "Senior doctor",
          "2016-present"
        )}

        {exprienceInfoCreating(
          "Midtown Medical Clinic",
          "Senior doctor",
          "2016-2015"
        )}
      </div>
    </TitleBasedSection>
  );
};

export default WorkAndExprience;
