import React from "react";
import ResaleCard from "./ResaleCard";

const SpecificListings = ({ topic, data }) => {
  // Array of background colors to alternate between
  const bgColors = [
    "bg-orange-50",
    "bg-rose-50",
    "bg-amber-50",
    "bg-yellow-50",
  ];

  return (
    <div className="mt-10 sm:mt-20 rounded-2xl flex flex-col bg-gradient-to-br from-orange-50 to-rose-50 p-6 sm:p-8">
      {/* Main Heading with decorative elements */}
      <div className="relative mb-12">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center text-orange-900">
          {topic}
        </h1>
        <div className="absolute left-1/2 -translate-x-1/2 w-24 h-1 bg-orange-300 mt-4 rounded-full" />
      </div>

      {/* Listings Container */}
      <div className="space-y-12">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl overflow-hidden transition-all duration-300`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 sm:p-8">
              {/* Topic Section with decorative elements */}
              <div
                className={`flex flex-col justify-center items-center col-span-1 ${
                  idx % 2 === 0 ? "md:order-first" : "md:order-last"
                }`}
              >
                <div className="relative">
                  <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl dancing-script text-[#e7c3b6] text-center">
                    {item.topic}
                  </h2>
                  {/* <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-orange-300" />
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    <span className="w-2 h-2 rounded-full bg-orange-300" />
                  </div> */}
                </div>
              </div>

              {/* Cards Section */}
              <div
                className={`col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${
                  idx % 2 === 0 ? "md:order-last" : "md:order-first"
                }`}
              >
                {item.data.map((value) => (
                  <div
                    key={value.MLS}
                    className="transform hover:scale-102 hover:-translate-y-1 duration-300"
                  >
                    <ResaleCard curElem={value} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificListings;
