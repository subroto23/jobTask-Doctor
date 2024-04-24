import { useState } from "react";
import { MdVerified } from "react-icons/md";

export const ModeSessionButton = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const handleActiveButton = (
    title: string,
    details: string,
    btnNumber: number
  ) => {
    return (
      <>
        <div
          className={`${
            selectedButton === `button${btnNumber}`
              ? "bg-[#F2FBF2] border-[#3A643B] text-skin-primary"
              : ""
          } border-skin-border-secoundry border rounded-[19px]`}
          onClick={() => handleButtonClick(`button${btnNumber}`)}
        >
          <div className="cursor-pointer border-skin-border-secoundry px-6 py-4">
            <h1 className="text-skin-secoundry text-sm text-center font-semibold flex gap-1 justify-center items-center">
              {title}
              {selectedButton === `button${btnNumber}` && (
                <span>
                  <MdVerified className="text-skin-secoundry text-sm" />
                </span>
              )}
            </h1>
            <p
              className={`${
                selectedButton === `button${btnNumber}`
                  ? "bg-[#F2FBF2] border-[#3A643B] text-skin-primary font-semibold"
                  : ""
              }text-skin-muted text-center`}
            >
              {details}
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-3">
      {handleActiveButton("In-Clinic", "45 Mins", 1)}
      {handleActiveButton("Video", "45 Mins", 2)}
      {handleActiveButton("Chat", "10 Mins", 3)}
    </div>
  );
};
