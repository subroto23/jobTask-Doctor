import { useState } from "react";
import FilteringData from "../FilteringData/FilteringData";

const FilteringForm = () => {
  const [experticeValue, setExperticeValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [feesValue, setFeesValue] = useState("");
  const [languages, setlanguages] = useState("");
  const dataValues = {
    experticeValue,
    genderValue,
    feesValue,
    languages,
  };

  return (
    <>
      <div className="mt-6 grid md:grid-cols-5 grid-cols-1 justify-center items-center gap-4 md:px-0 px-4">
        <div>
          <select
            onChange={(e) => setExperticeValue(e.target.value)}
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Expertise</option>
            <option value="Hair Care">Hair Care</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Gynecologist">Nephrologist</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => setGenderValue(e.target.value)}
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => setFeesValue(e.target.value)}
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Fees</option>
            <option value="Rs.0-Rs.500">Rs.0-Rs.500</option>
            <option value="Rs.500-Rs.1000">Rs.500-Rs.1000</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => setlanguages(e.target.value)}
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Languages</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
        </div>
        <div>
          <select
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Filters</option>
            <option value="All-filters">All filters</option>
            <option value="Language">Language</option>
            <option value="Fees">Fees</option>
            <option value="Experise">Expertise</option>
          </select>
        </div>
      </div>
      <FilteringData data={dataValues} />
    </>
  );
};

export default FilteringForm;
