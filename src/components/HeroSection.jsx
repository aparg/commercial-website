import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { generateURL } from "@/helpers/generateURL";

const HouseTypeCard = ({ type, icon, link }) => (
  <Link href={link} className="text-black">
    <div className="bg-white p-4 rounded-lg text-center hover:cursor-pointer hover:border-primary-green border-2 transition duration-300 h-full">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-gray-800">{type}</h3>
    </div>
  </Link>
);

const houseTypes = [
  { type: "Detached", icon: "🏡" },
  { type: "Semi-Detached", icon: "🏘️" },
  { type: "Townhouse", icon: "🏚️" },
];

const HeroSection = () => {
  return (
    <div className="">
      <div className="mx-auto">
        <div
          className="relative flex h-[50vh] sm:h-[70vh] flex-col lg:flex-row items-center justify-center pt-10 gap-x-10 lg:pb-20 gap-y-12 sm:gap-y-0 px-2 sm:px-0 bg-bottom bg-no-repeat"
          // id="hero-section"
        >
          <div className="w-full z-10 pb-20 sm:w-screen flex flex-col items-center mb-10 lg:mb-0 order-2 sm:order-1 cover">
            {/* <Link href="/">
              <div className="flex flex-col items-center justify-start mb-5">
                <img
                  src="/logo-commercial.png"
                  alt="Commercial Website Logo"
                  width={200}
                  height={200}
                />
              </div>
            </Link> */}
            {/* <img
              src="/hero-img.jpg"
              className="absolute z-[-1] object-cover w-full h-full top-0 left-0 opacity-65"
            ></img> */}
            <h1 className="text-[1.3rem] sm:text-[3rem] font-extrabold pb-0 mb-0 mt-2 mt-md-0 relative text-center">
              <span className="d-block mb-2 text-black">Find Your Next </span>{" "}
              <span className="text-black">Business With Us! </span>
            </h1>

            {/* <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-12">
              {houseTypes.map((house, index) => (
                <HouseTypeCard
                  key={index}
                  type={house.type}
                  icon={house.icon}
                  link={generateURL({
                    houseTypeVal: house.type.split("-").join("").toLowerCase(),
                  })}
                />
              ))}
            </div> */}
            <div className="w-[90%] sm:w-[60%] mt-5 hidden sm:block">
              <SearchBar numberOfSuggestions={3} height={60} />
            </div>
            <div className="w-[90%] sm:w-[60%] mt-2 sm:mt-10 block sm:hidden">
              <SearchBar
                numberOfSuggestions={3}
                height={60}
                placeholder="Search"
              />
            </div>
            <div className="text-medium sm:text-xl mt-2 text-center">
              Find{" "}
              <span className="font-bold">businesses for sale or lease</span>{" "}
              across Ontario!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

{
  /* <div className="w-full lg:w-1/2 relative order-1 sm:order-2">
            <Image
              src="/hero-img.png"
              alt="Businesses"
              width="800"
              height="600"
              className="rounded-lg h-[400px] sm:h-[500px] lg:h-[600px]"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg">
              <p className="text-sm font-semibold text-gray-900">
                Featured Property
              </p>
              <p className="text-xs text-gray-600">
                Modern Townhouse in Downtown
              </p>
            </div>
          </div> */
}
