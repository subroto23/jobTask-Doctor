import { useState } from "react";

const HoeizontialScrollingCard = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  const handleActiveButton = (
    title: string,
    details: string,
    btnNumber: number,
    style?: string
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
          <div className="cursor-pointer border-skin-border-secoundry px-2 py-4">
            <h1 className="text-skin-secoundry text-sm text-center flex gap-1 justify-center items-center">
              {title}
            </h1>
            <p
              className={`${
                selectedButton === `button${btnNumber}`
                  ? "bg-[#F2FBF2] border-[#3A643B] text-skin-primary font-semibold"
                  : ""
              }text-skin-muted text-center ${style}`}
            >
              {details}
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="grid md:grid-cols-11 items-center gap-1">
      <div>
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
      </div>
      <div className="col-span-3">
        {handleActiveButton("Mon. 10 Oct", "10 slots", 1)}
      </div>
      <div className="col-span-3">
        {handleActiveButton(
          "Tue. 11 Oct",
          "02 slots",
          2,
          "text-skin-info fonst-bold"
        )}
      </div>
      <div className="col-span-3">
        {handleActiveButton(
          "Wed. 12 Oct",
          "05 slots",
          3,
          "text-skin-danger fonst-bold"
        )}
      </div>
      <div>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default HoeizontialScrollingCard;
