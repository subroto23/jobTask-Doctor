import { ReactNode } from "react";

interface IWithoutBgButton {
  props: string;
  icon?: ReactNode;
  style?: string;
}

const WithoutBacgroundButton = ({ props, icon, style }: IWithoutBgButton) => {
  return (
    <>
      <button
        className={`border border-skin-border-primary rounded-xl md:p-[14px_30px_12px_39px] p-2 text-sm text-skin-primary ${style}`}
      >
        <span className="flex justify-center items-center gap-2">
          {props} {icon ? icon : null}
        </span>
      </button>
    </>
  );
};

export default WithoutBacgroundButton;
