"use client";
import useDeviceView from "@/helpers/useDeviceView";
import React, { useState } from "react";
import formatCurrency from "@/helpers/formatCurrency";
import TimeAgo from "@/helpers/TimeAgo";
import Link from "next/link";
const PropertyDataTable = ({ main_data }) => {
  const getCommunityFeatures = () => {
    const {
      PropertyFeatures1,
      PropertyFeatures2,
      PropertyFeatures3,
      PropertyFeatures4,
      PropertyFeatures5,
      PropertyFeatures6,
    } = main_data;
    const isPropertyFeaturesAvailable =
      PropertyFeatures1 ||
      PropertyFeatures2 ||
      PropertyFeatures3 ||
      PropertyFeatures4 ||
      PropertyFeatures5 ||
      PropertyFeatures6;
    if (isPropertyFeaturesAvailable)
      return [
        PropertyFeatures1,
        PropertyFeatures2,
        PropertyFeatures3,
        PropertyFeatures4,
        PropertyFeatures5,
        PropertyFeatures6,
      ].join(", ");
    else return "N/A";
  };
  const [collapse, setCollapse] = useState(true);
  const { isMobileView } = useDeviceView();

  const TaxAnnualAmount = formatCurrency(main_data?.Taxes);
  const AssociationFee = formatCurrency(main_data?.AddlMonthlyFees);
  const formatNumber = (value) => {
    // Check if the value is not null or undefined
    if (value != null) {
      return Number(value).toLocaleString("en-US");
    } else {
      // Handle the case where the value is null or undefined
      return "N/A"; // or any default value or message you prefer
    }
  };
  return (
    <>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 w-full ${
          isMobileView ? "flex-wrap" : "flex-nowrap"
        }`}
      >
        <div className="col-span-1 md:col-span-1 border-b border-gray-200 py-2 md:py-3 pr-0">
          <p className="font-bold text-black">Property type</p>
        </div>
        <div className="col-span-1 md:col-span-1 border-b border-gray-200 py-2 md:py-3 pl-0">
          <p className="text-black">{main_data.TypeOwn1Out}</p>
        </div>
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 border-sm py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Lot size</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 border-sm py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">
            {main_data.LotFront} X {main_data.LotDepth} Feet
          </p>
        </div>
      </div>
      <div
        className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
          isMobileView ? "flex-wrap" : "flex-nowrap "
        }`}
      >
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Style </p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">{main_data.Style}</p>
        </div>
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Approx. Area</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">
            {main_data.ApproxSquareFootage} Sqft
          </p>
        </div>
      </div>
      <div
        className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
          isMobileView ? "flex-wrap" : "flex-nowrap "
        }`}
      >
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Taxes</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">{TaxAnnualAmount}</p>
        </div>
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Tax year</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">{main_data.TaxYear}</p>
        </div>
      </div>
      <div
        className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
          isMobileView ? "flex-wrap" : "flex-nowrap "
        }`}
      >
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Garage spaces</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">
            {formatNumber(main_data.GarageSpaces)}
          </p>
        </div>
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Mls®</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">{main_data.MLS}</p>
        </div>
      </div>
      <div
        className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
          isMobileView ? "flex-wrap" : "flex-nowrap "
        }`}
      >
        <div className="col-span-1 md:col-span-1 border-b border-gray-200 py-2 md:py-3 pr-0">
          <p className="font-bold text-black">Last check for updates</p>
        </div>
        <div className="col-span-1 md:col-span-1 border-b border-gray-200 py-2 md:py-3 pl-0">
          <p className="text-black">
            <TimeAgo modificationTimestamp={main_data.TimestampSql} />
          </p>
        </div>

        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Virtual tour</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">
            <Link href={main_data.VirtualTourURL || ""} target="_blank">
              Tour Now
            </Link>
          </p>
        </div>
      </div>

      <div
        className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
          isMobileView ? "flex-wrap" : "flex-nowrap "
        }`}
      >
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">
            Basement information
          </p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">
            {main_data?.Basement1
              ? `${main_data?.Basement1}, ${main_data?.Basement2}`
              : "None"}
          </p>
        </div>

        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Building size</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">
            {main_data.ApproxSquareFootage}
          </p>
        </div>
      </div>

      <div
        className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
          isMobileView ? "flex-wrap" : "flex-nowrap "
        }`}
      >
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Status</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">
            {main_data.Status === "A" ? "Active" : "In-Active"}
          </p>
        </div>
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Property sub type</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">
            {/* {main_data.PropertySubType} */}
          </p>
        </div>
      </div>

      <div
        className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
          isMobileView ? "flex-wrap" : "flex-nowrap "
        }`}
      >
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Maintenance fee</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">{AssociationFee}</p>
        </div>
        <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
          <p className="cardd-subtitle_bg-black font-bold">Year built</p>
        </div>
        <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
          <p className="cardd-subtitle_bg-black">
            {main_data.AssessmentYear || "--"}
          </p>
        </div>
      </div>

      <div
        className={`block ${collapse ? "hidden" : "block"}`}
        id="collapseExample"
      >
        {/* Interior */}
        <h5 className="py-2 font-bold pt-5">Interior</h5>
        <div
          className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              # total bathrooms
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.Washrooms}</p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Full baths</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.Washrooms}</p>
          </div>
        </div>

        <div
          className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              # of above grade bedrooms
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.Bedrooms}</p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">No. of rooms</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">
              {Number(main_data.Rooms) + Number(main_data.RoomsPlus) || "N/A"}
            </p>
          </div>
        </div>

        <div
          className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              Family room available
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">
              {Boolean(Number(main_data.FamilyRoom) > 0) ? "Yes" : "No"}
            </p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              Laundry information
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.LaundryLevel}</p>
          </div>
        </div>

        {/* Exterior */}
        <h5 className="py-2 font-bold pt-5">Exterior</h5>
        <div
          className={`grid grid-cols-2  grid-cols-md-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              Construction materials
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.Exterior1}</p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              Other structures
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">
              {main_data.OtherStructures1}
            </p>
          </div>
        </div>

        <div
          className={`grid grid-cols-2  grid-cols-md-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold"># garage spaces</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">
              {formatNumber(main_data.GarageSpaces)}
            </p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              # parking spaces
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.ParkingSpaces}</p>
          </div>
        </div>

        <div
          className={`grid grid-cols-2  grid-cols-md-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Garage features</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.GarageType}</p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              Has basement (y/n)
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">
              {main_data.Basement1 ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div
          className={`grid grid-cols-2  grid-cols-md-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              Has garage (y/n)
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">
              {main_data.GarageType ? "Yes" : "No"}
            </p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Drive</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.Drive}</p>
          </div>
        </div>

        {/* Amenities / Utilities */}
        <h5 className="py-2 font-bold pt-5">Amenities / Utilities</h5>
        <div
          className={`grid grid-cols-2 md:grid-cols-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Cooling</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">
              {main_data.AirConditioning}
            </p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Heat source</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data?.HeatSource}</p>
          </div>
        </div>
        <div
          className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Heat type</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data?.HeatType}</p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Sewers</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data?.Sewers}</p>
          </div>
        </div>

        {/* Location */}
        <h5 className="py-2 font-bold pt-5">Location</h5>
        <div
          className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Water source</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.Water}</p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Area</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.Area}</p>
          </div>
        </div>
        <div
          className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Community</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{main_data.Community}</p>
          </div>
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">
              Community features
            </p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">{getCommunityFeatures()}</p>
          </div>
        </div>
        <div
          className={`grid grid-cols-2  md:grid-cols-4 w-100 ${
            isMobileView ? "flex-wrap" : "flex-nowrap "
          }`}
        >
          <div className="col-7 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pr-0">
            <p className="cardd-subtitle_bg-black font-bold">Directions</p>
          </div>
          <div className="col-5 col-md border-b-[0.1px] border-gray-200 py-2 md:py-3 pl-0">
            <p className="cardd-subtitle_bg-black">
              {main_data.DirectionsCrossStreets}
            </p>
          </div>
        </div>
      </div>
      {/* see more */}

      {/* <div className="pt-3">
              <Collapse> </Collapse>
            </div> */}
      <button
        onClick={() => setCollapse(!collapse)}
        className="bg-black underline px-2 border-2 border-black py-1 text-white font-semibold rounded-lg hover:text-black hover:bg-gray-200 focus:outline-none transition-colors duration-200 sm:my-2 mt-2 mb-4 "
      >
        See {collapse ? "More" : "Less"}
      </button>
    </>
  );
};

export default PropertyDataTable;
