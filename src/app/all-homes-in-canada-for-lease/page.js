import SiteLinks from "@/components/SiteLinks";
import React from "react";

const page = () => {
  return <SiteLinks type={"lease"} />;
};

export async function generateMetadata() {
  return {
    title: "All businesses for lease in Canada | Commercialspot.ca",
    description: "50000+ businesses in Canada",
  };
}

export default page;
