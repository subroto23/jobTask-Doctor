import { ReactNode } from "react";
interface IChildrenProps {
  title: string;
  children: ReactNode;
}
const TitleBasedSection = ({ children, title }: IChildrenProps) => {
  return (
    <div
      data-aos="fade-up"
      className="border border-[#DCDCDC] rounded-[15px_18px] text-skin-secoundry mt-12"
    >
      <div className="rounded-[15px_18px_0px_0px] bg-gradient-to-tr from-skin-gradent-start via-skin-gradent-center to-skin-gradent-end md:py-6 py-3 px-4 font-semibold flex md:justify-between justify-center items-center">
        <span className="text-sm tracking-wider text-skin-primary">
          {title}
        </span>
      </div>
      <div className="px-4 md:py-6 py-4">{children}</div>
    </div>
  );
};

export default TitleBasedSection;
