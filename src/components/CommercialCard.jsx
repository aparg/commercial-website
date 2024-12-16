"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TimeAgo from "@/helpers/TimeAgo";
import { commercial } from "../api/routes/fetchRoutes";
import { saleLease } from "@/constant";
import { generateURL } from "@/helpers/generateURL";
import { usePathname } from "next/navigation";
import useDeviceView from "@/helpers/useDeviceView";
import MobileCityResoCard from "./MobileCityResoCard";
import {
  LandPlot,
  LucideWatch,
  RulerIcon,
  Timer,
  Watch,
  WatchIcon,
} from "lucide-react";

const CommercialCard = ({ curElem, small = false }) => {
  const { isMobileView } = useDeviceView();
  const pathname = usePathname();
  const price = Number(curElem.ListPrice).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const mapObj = {
    MLS: curElem.MLS,
    index: 1,
  };
  const imgSrc = commercial.photos.replace(/MLS|index/gi, function (matched) {
    return mapObj[matched];
  });
  const aboutProperty = () => {
    let description;
    if (curElem.TypeOwn1Out && curElem.Use)
      description = `${[curElem.TypeOwn1Out || "", curElem.Use || null].join(
        ", "
      )}`;
    else if (curElem.TypeOwn1Out) description = curElem.TypeOwn1Out;
    else if (curElem.Use) description = curElem.Use;
    else description = "Property";

    if (curElem.SaleLease) description += ` for ${curElem.SaleLease}`;
    return description;
  };
  /* console.log(imgSrc); */
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `/noimage.webp`;
  };
  const streetAndMLS = (() => {
    const parts = [];

    if (curElem.Street) {
      parts.push(curElem.Street);
    }

    if (curElem.StreetName) {
      const streetName = curElem.StreetName.trim().replace(/ /g, "-");
      parts.push(streetName);
    }

    if (curElem.StreetAbbreviation) {
      parts.push(curElem.StreetAbbreviation);
    }

    if (curElem.MLS) {
      parts.push(curElem.MLS);
    }

    return parts.filter(Boolean).join("-");
  })();
  return (
    <section className="">
      <Link
        href={generateURL({
          cityVal: curElem.Municipality,
          listingIDVal: streetAndMLS,
          embeddedSite: pathname.includes("embedded-site"),
        })}
        className="text-black"
      >
        <div className="lg:px-0 h-full w-full">
          <div
            className={`flex flex-col overflow-hidden transition-all duration-200 transform bg-white shadow group rounded-xl p-0 hover:shadow-lg hover:-translate-y-1 relative`}
          >
            <div
              className={`${
                small ? "h-44" : "h-[20rem]"
              } overflow-hidden relative`}
            >
              <div className="h-full relative">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110 rounded-md"
                  src={imgSrc}
                  alt="property image"
                  onError={handleImageError}
                />
              </div>
            </div>
            <div className="flex-1 sm:px-3 py-2 px-2">
              <div className="flex flex-row items-center">
                <div
                  className="text-gray-600 font-normal text-md py-[2px] flex items-center rounded-md mx-1"
                  style={{
                    background: "white",
                  }}
                >
                  {`${aboutProperty()} in ${curElem.Municipality}, ON`}
                </div>
              </div>
              <div className="text-gray-800 text-[0.75rem] p-[2px] rounded-md bg-white flex gap-x-3 items-center">
                <div className="flex gap-x-1">
                  <Timer className="w-4 h-4" />
                  <TimeAgo modificationTimestamp={curElem.TimestampSql} />
                </div>
                {curElem.TotalArea && (
                  <div className="flex gap-x-1">
                    <LandPlot className="w-4 h-4" />
                    {curElem.TotalArea > 0
                      ? Math.floor(curElem.TotalArea)
                      : "N/A"}{" "}
                    sq. ft.
                  </div>
                )}
              </div>
              <hr className="text-gray-600 my-2"></hr>
              <h2 className="font-bold text-xl sm:text-3xl sm:items-center justify-start mw flex flex-col sm:flex-row">
                <div className="min-w-fit ">
                  {price}
                  {""}

                  {curElem.SaleLease === saleLease.lease.value && (
                    <span> /mo</span>
                  )}
                </div>

                {/* <div
                  className={`sm:shadow-lg p-1 sm:ms-1 text-black text-xs min-w-fit ${
                    small && "hidden"
                  }`}
                >
                  {Math.floor(curElem.TotalArea)} ft
                  <sup className="text-xs">2</sup>
                </div> */}
              </h2>

              <div className="flex flex-row justify-between pb-1">
                <div className="text-black truncate text-ellipsis">
                  <div className="text-dark bva">
                    {curElem.StreetName ? (
                      `${curElem.Street} ${curElem.StreetName}${" "}
                    ${curElem.StreetAbbreviation || ""} ${
                        curElem.Municipality
                      }, Ontario`
                    ) : (
                      <span className="p-4"></span>
                    )}
                  </div>
                </div>
              </div>
              <p className="mb-0 fs-mine text-limit text-sm pb-0 text-gray-400 ">
                {" "}
                MLS® #{curElem.MLS}
              </p>
              <div className="flex flex-row justify-between text-gray-400 text-xs pb-2">
                Listed by {curElem.ListBrokerage}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default CommercialCard;
