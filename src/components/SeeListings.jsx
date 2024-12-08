import { generateURL } from "@/helpers/generateURL";
import Link from "next/link";
import React from "react";

const SeeListings = () => {
  return (
    <div className="w-full bg-gray-100 py-20 flex flex-col items-center mb-[20rem]">
      <div className="max-w-[90%]">
        <h2 className="uppercase text-sm sm:text-md text-center text-gray-600">
          Commercialspot.ca real estate listings
        </h2>
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          See listings available with us
        </h1>
        <section className="w-fit-content mx-auto grid grid-cols-1 sm:grid-cols-3 justify-center mt-8 sm:mt-16 sm:gap-x-40 sm:gap-y-0 gap-y-8">
          <div className="">
            <h2 className="font-bold text-xl mb-2 text-center">
              Popular cities near you
            </h2>
            <ul className="flex-col justify-center text-center">
              <li>
                <Link
                  href={generateURL({ cityVal: "Toronto" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Toronto Businesses for Sale
                </Link>
              </li>
              <li>
                <Link
                  href={generateURL({ cityVal: "Ottawa" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Ottawa Businesses for Sale
                </Link>
              </li>
              <li>
                <Link
                  href={generateURL({ cityVal: "Mississauga" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Mississauga Businesses for Sale
                </Link>
              </li>
              <li>
                <Link
                  href={generateURL({ cityVal: "Ajax" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Ajax Businesses for Sale
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-xl mb-2 text-center">
              Types of businesses available
            </h2>
            <ul className="flex-col justify-center text-center">
              <li>
                <Link
                  href={generateURL({ houseTypeVal: "restaurant" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Restaurant for Sale
                </Link>
              </li>
              {/* <li>
                <Link
                  href={generateURL({ houseTypeVal: "motel" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Motels for Sale
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href={generateURL({ houseTypeVal: "land" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Land for Sale
                </Link>
              </li> */}
              <li>
                <Link
                  href={generateURL({ houseTypeVal: "gas station" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Gas stations for Sale
                </Link>
              </li>
              <li>
                <Link
                  href={generateURL({ houseTypeVal: "convenience store" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Convenience store for Sale
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-xl mb-2 text-center">Rent or Buy</h2>
            <ul className="flex-col justify-center text-center">
              <li>
                <Link
                  href={generateURL({ saleLeaseVal: "sale" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Ontario Businesses for Sale
                </Link>
              </li>
              <li>
                <Link
                  href={generateURL({ saleLeaseVal: "lease" })}
                  className="hover:text-primary-green my-4 sm:font-medium text-sm"
                >
                  Ontario Businesses for Lease
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SeeListings;
