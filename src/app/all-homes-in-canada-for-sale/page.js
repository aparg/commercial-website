import SiteLinks from "@/components/SiteLinks";
import React from "react";

const page = () => {
  return <SiteLinks type={"sale"} />;
};

export async function generateMetadata() {
  return {
    title: "All properties for sale in Canada | Commercialspot.ca",
    description: "50000+ businesses in Canada",
  };
}

export default page;
