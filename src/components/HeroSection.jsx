import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { generateURL } from "@/helpers/generateURL";
import { MapPin } from "lucide-react";

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
    <div className="-mt-20 min-h-screen bg-gradient-to-b from-[#ffeeee] to-white flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl sm:text-6xl sm:leading-[4rem]">
        <div className="text-center">Canada's Leading</div>
        <div>
          Commercial Platform<span className="text-red-500">.</span>
        </div>
      </h1>
      <div className="w-[80%] sm:w-[50%] my-3">
        <SearchBar />
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
