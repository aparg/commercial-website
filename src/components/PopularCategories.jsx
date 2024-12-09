"use client";
import React, { useState } from "react";
import { link } from "@nextui-org/theme";
import Link from "next/link";
import { generateURL } from "@/helpers/generateURL";
const cardsData = [
  {
    id: 1,
    imageSrc: "/convenience-store.jpg",
    title: "Convenience Stores for sale",
    link: generateURL({
      houseTypeVal: "convenience store",
      saleLeaseVal: "sale",
    }),
  },

  {
    id: 3,
    imageSrc: "/restaurant.jpg",
    title: "Restaurants for sale",
    link: generateURL({ houseTypeVal: "restaurant", saleLeaseVal: "sale" }),
  },
  {
    id: 4,
    imageSrc: "/gas-station.jpg",
    title: "Gas Stations for sale",
    link: generateURL({ houseTypeVal: "gas station", saleLeaseVal: "sale" }),
  },
];

const TextOverImageCard = ({ imageSrc, title, link }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="h-80 w-80 rounded-md overflow-hidden relative group/card mb-5">
      <Link href={link} className="w-full h-full inline ">
        <div
          className="rounded w-full h-full shadow-lg bg-gradient-to-t from-black to-transparent absolute"
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        ></div>
        <img
          className="object-fill w-full h-full rounded-md z-0"
          src={imageSrc}
          alt="Card"
        />
        <div
          className={`px-6 py-4 absolute bottom-0 z-10 text-white group-hover/card:transition group-hover/card:delay:300 group-hover/card:translate-y-[-0.300rem]`}
        >
          <b className="font-bold text-xl mb-2">{title}</b>
          <p className="text-base font-semibold">View Listings now!</p>
        </div>
      </Link>
    </div>
  );
};

const PopularCategories = () => {
  return (
    <div className="">
      <div className="flex flex-wrap sm:space-x-4 mt-4">
        {cardsData.map((card) => (
          <TextOverImageCard {...card} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
