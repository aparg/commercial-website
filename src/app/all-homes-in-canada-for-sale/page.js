import SiteLinks from "@/components/SiteLinks";
import React from "react";

const page = () => {
  return <SiteLinks type={"sale"} />;
};

export async function generateMetadata() {
  return {
    title: "All properties for sale in Canada | Commercial Website",
    description: "50000+ homes in Canada",
  };
}

export default page;
