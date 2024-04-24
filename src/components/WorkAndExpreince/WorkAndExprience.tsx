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
        <div className="bg-skin-icon-card h-20 w-20 rounded-md md:flex md:justify-center md:items-center hidden">
          <span>
            <MdOutlineHomeWork className="text-[#2E37A4] md:text-5xl text-3xl" />
          </span>
        </div>
        <div className="md:col-span-3 md:justify-self-start justify-self-center order-0">
          <h1 className="text-skin-secoundry text-sm font-semibold md:mb-3">
            {title}
          </h1>
          <p className="text-skin-muted md:text-start text-center">
            {degistation}
          </p>
        </div>
        <div className="self-start md:justify-self-start justify-self-center md:mt-0 -mt-8">
          <span className="text-skin-muted md:text-sm text-[16px] order-0">
            {joiningDate}
          </span>
        </div>
      </>
    );
  };
  return (
    <TitleBasedSection title={"My Work Experience"}>
      <div className="space-y-5 mb-5">
        <h1 className="text-skin-primary text-sm font-semibold text-center md:text-start">
          I have been in practice for : 7+ Years
        </h1>
        <hr className="w-[80%] border-skin-border-primary mx-auto md:mx-0" />
      </div>
      <div className="grid md:grid-cols-5 grid-cols-1 md:gap-y-12 gap-y-6 md:border-0">
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
