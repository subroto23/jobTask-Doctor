import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const HeaderBanner = () => {
  return (
    <div className="bg-[#EAF2EA] w-full md:py-16 py-6">
      <div>
        <h1 className="md:text-3xl text-sm text-center font-semibold text-skin-secoundry">
          Find expert Doctors for an In-clinic session here
        </h1>
      </div>
      {/* Form */}
      <div className="w-3/5 mx-auto px-3 mt-4">
        <div className="grid md:grid-cols-6 justify-center items-center md:gap-1 gap-3">
          <div className="relative md:col-span-2">
            <select className="block appearance-none border border-gray-200 text-gray-700 py-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-8">
              <option>Select Location</option>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0  flex items-center px-2 text-gray-700">
              <span>
                <FaLocationDot className="text-skin-primary" />
              </span>
            </div>
          </div>
          <div className="relative md:col-span-4">
            <input
              type="text"
              className="block appearance-none border border-gray-200 text-gray-700 py-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-8 w-full"
              placeholder="eg. Doctor, specialisation, clinic name"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0  flex items-center px-2 text-gray-700">
              <span>
                <FaArrowRight className="text-skin-primary" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
