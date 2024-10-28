import React from "react";
import ResaleCard from "./ResaleCard";

const SpecificListings = ({ topic, data }) => {
  return (
    <div className="mt-10 sm:mt-20 rounded-2xl flex-col bg-[#ffeedf] space-y-10 p-8">
      <h2 className="font-extrabold text-6xl md:text-6xl text-center w-full">
        {topic}
      </h2>
      {data.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4 rounded-xl p-4"
        >
          {/* Topic Section */}
          <div
            className={`flex justify-center items-center col-span-1 ${
              idx % 2 === 0 ? "md:order-first" : "md:order-last"
            }`}
          >
            <h2 className="font-bold text-6xl md:text-6xl w-4/5 dancing-script">
              {item.topic}
            </h2>
          </div>

          {/* Cards Section */}
          <div
            className={`col-span-3 grid grid-cols-3 space-x-3 ${
              idx % 2 === 0 ? "md:order-last" : "md:order-first"
            }`}
          >
            {item.data.map((value) => (
              <ResaleCard key={value.MLS} curElem={value} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecificListings;
