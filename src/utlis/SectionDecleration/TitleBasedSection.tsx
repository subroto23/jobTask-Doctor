import { ReactNode } from "react";
interface IChildrenProps {
  title: string;
  children: ReactNode;
}
const TitleBasedSection = ({ children, title }: IChildrenProps) => {
  return (
    <div className="border border-[#DCDCDC] rounded-[15px_18px] text-skin-secoundry mt-12">
      <div className="rounded-[15px_18px_0px_0px] bg-gradient-to-tr from-skin-gradent-start via-skin-gradent-center to-skin-gradent-end py-2 px-4 font-semibold flex justify-between items-center">
        <span className="text-2xl tracking-wider text-skin-primary">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
};

export default TitleBasedSection;
