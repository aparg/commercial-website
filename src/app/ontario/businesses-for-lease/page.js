import React from "react";
import dynamic from "next/dynamic";

import { capitalizeFirstLetter } from "@/helpers/capitalizeFIrstLetter";
import { getSalesData } from "../../../api/getSalesData";
import { ImSpinner } from "react-icons/im";

const FiltersWithSalesList = dynamic(
  () => import("@/components/FiltersWithSalesList"),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center align-item-center">
        <ImSpinner size={24} />
      </div>
    ),
  }
);

const INITIAL_LIMIT = 30;
const page = async ({ params }) => {
  const salesListData = await getSalesData(0, INITIAL_LIMIT);
  const saleLeaseVal = "lease";
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="">
          <div className="">
            <FiltersWithSalesList
              {...{ salesListData, INITIAL_LIMIT, saleLeaseVal }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function generateMetadata({ params }, parent) {
  return {
    ...parent,
    alternates: {
      canonical: `https://commercialspot.ca/ontario/businesses-for-lease`,
    },
    openGraph: {
      images: "/favicon.ico",
    },
    title: [
      `100+ Ontario Restaurants, Land, Convenience Stores, Motels and Gas Stations for lease`,
      ,
      "New Listings",
      "Commercialspot.ca",
    ].join(" | "),
    description: `Find houses for sale in ON. Visit Commercialspot.ca to see all the ON real estate listings on the MLS® Systems today! Prices starting at $1 💰`,
  };
}

export default page;
