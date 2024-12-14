import { getFilteredRetsData } from "@/api/getSalesData";
import CommercialCard from "@/components/CommercialCard";
import React from "react";

const page = async () => {
  const BROKERAGELISTINGS = await getFilteredRetsData({
    listBrokerage: "ELIXIR REAL ESTATE INC.",
    offset: 0,
    limit: 30,
  });
  return (
    <div className="mx-auto max-w-[90%] ">
      <h1
        className={`font-extrabold text-2xl text-center sm:text-left pt-2 my-4`}
      >
        Featured Listings | Commercial
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 xs:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-0 gap-x-2 gap-y-4 md:gap-x-2 sm:gap-y-[40px] mb-10">
        {BROKERAGELISTINGS.map((data) => {
          return <CommercialCard curElem={data} />;
        })}
      </div>
    </div>
  );
};

export default page;
