import { ReactNode } from "react";

const WithoutBacgroundButton = ({
  props,
  icon,
}: Record<string, string | ReactNode>) => {
  return (
    <>
      <button className="border border-skin-border-primary rounded-xl md:p-[14px_30px_12px_39px] p-2 text-sm text-skin-primary">
        <span className="flex items-center gap-2">
          {props} {icon ? icon : null}
        </span>
      </button>
    </>
  );
};

export default WithoutBacgroundButton;
