/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

interface IFilterValue {
  data: {
    experticeValue?: string;
    genderValue?: string;
    feesValue?: string;
    languages?: string;
  };
}

const FilteringData = ({ data }: IFilterValue) => {
  const [hiddenItems, setHiddenItems] = useState<string[]>([]);
  const filteredData = Object.entries(data)
    .filter(([_, value]) => value !== "")
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

  const arrayOfObjects = Object.keys(filteredData).map(
    (key) => filteredData[key]
  );
  const handleRemvItem = (item: string) => {
    setHiddenItems([...hiddenItems, item]);
  };

  return (
    <div className="mt-8">
      <div className="flex md:flex-row flex-col justify-end gap-3">
        {arrayOfObjects &&
          arrayOfObjects?.map((item: string) => {
            if (hiddenItems && hiddenItems.includes(item)) {
              return;
            }
            return (
              <div key={item} className="relative">
                <div className="bg-[#EAF2EA] rounded-full py-5 px-12 flex items-center">
                  <span>{item}</span>
                  <button
                    className="absolute right-0 pr-2"
                    onClick={() => handleRemvItem(item)}
                  >
                    <RxCross1 className="text-skin-secoundry text-lg" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FilteringData;
