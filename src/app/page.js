import Slider from "@/components/Slider";
import { getFilteredRetsData, getSalesData } from "../api/getSalesData";
import PropertyDisplaySection from "@/components/PropertyDisplaySection";
import { generateURL } from "@/helpers/generateURL";
import { fetchAllBlogPosts } from "@/api/blogs";
import HeroSection from "@/components/HeroSection";
import CanadianCitiesShowcase from "@/components/CanadianCitiesShowcase";
import ContactForm from "@/components/ContactForm";
import PropertiesDisplayer from "@/components/PropertiesDisplayer";
import { cache } from "sharp";
import MobilePromo from "@/components/MobilePromo";
import SeeListings from "@/components/SeeListings";
import SpecificListings from "@/components/SpecificListings";
import { houseType } from "@/constant";

export const metadata = {
  title: "Commercialspot.ca | Businesses in Ontario",
  description:
    "Commercialspot.ca is Canada's Top Destination for Businesses such as Restaurants, Land, Convenience Stores, Motels and Gas Stations. The home listings are updated every minutes. Check out 100s of properties listed in Canada.",
  keywords: "resale, properties, Ontario, Canada, low-rise, businesses",
};

export default async function Home() {
  const INITIAL_LIMIT = 4;
  const INITIAL_OFFSET = 0;
  const TORONTOHOMES = await getSalesData(
    INITIAL_OFFSET,
    INITIAL_LIMIT,
    "Toronto"
  );
  const BRAMPTONHOMES = await getSalesData(
    INITIAL_OFFSET,
    INITIAL_LIMIT,
    "Brampton"
  );
  const MISSISAUGAHOMES = await getSalesData(
    INITIAL_OFFSET,
    INITIAL_LIMIT,
    "Mississauga"
  );
  const OAKVILLEHOMES = await getSalesData(
    INITIAL_OFFSET,
    INITIAL_LIMIT,
    "Oakville"
  );
  const RESTAURANTS = await getFilteredRetsData({
    houseType: ["Restaurant"],
    skip: 0,
    limit: 3,
    range: undefined,
  });
  const MOTELS = await getFilteredRetsData({
    houseType: ["Convenience/Variety"],
    skip: 0,
    limit: 3,
    range: undefined,
  });
  const GASSTATIONS = await getFilteredRetsData({
    houseType: ["Gas Stations"],
    skip: 0,
    limit: 3,
    range: undefined,
  });

  // const fetchFireplacesData = async () => {
  //   const response = await fetch(
  //     "https://rets.dolphy.ca/commercial/Properties/?$range=minFireplacesTotal=1&$limit=4",
  //     { cache: "no-cache" }
  //   );
  //   const data = await response.json();
  //   return data.results;
  // };
  // const fetchSepEntranceData = async () => {
  //   let conditions = [];
  //   const properties = ["Basement1", "Basement2"];
  //   properties.forEach((val) =>
  //     // (conditions += `${val}=Indoor%20Pool,${val}=Outdoor%20Pool,${val}=Pool`)
  //     conditions.push(`${val}=Sep%20Entrance`)
  //   );
  //   // conditions += `&$select=TypeOwnSrch='.S.'`;
  //   const fetchString = `https://rets.dolphy.ca/commercial/Properties/?$selectOr=${conditions.join(
  //     ","
  //   )}&$limit=1`;
  //   const lowriseOnly = [
  //     "TypeOwnSrch=.D.",
  //     "TypeOwnSrch=.A.",
  //     "TypeOwnSrch=.J.",
  //     "TypeOwnSrch=.K.",
  //   ];
  //   const results = await Promise.all(
  //     lowriseOnly.map(async (val) => {
  //       const response = await fetch(fetchString + `&$select=${val}`, {
  //         next: { revalidate: 43200 },
  //       });
  //       const data = await response.json();
  //       return data.results[0];
  //     })
  //   );
  //   return results;
  // };

  // const HOUSEWITHFIREPLACES = await fetchFireplacesData();
  // const HOUSEWITHSEPARATEENTRANCE = await fetchSepEntranceData();
  // const BLOGPOSTS = await fetchSomeBlogPosts({ pageSize: 4 });
  const BLOGPOSTS = await fetchAllBlogPosts();
  {
    /* pass property propertyType:"commercial" only for commercial card slider, default is commercial */
  }

  return (
    <>
      <HeroSection />
      <SeeListings />
      <MobilePromo></MobilePromo>
      <section className="mx-auto max-w-[90%]">
        <PropertyDisplaySection
          title="Explore properties in Toronto"
          subtitle={""}
          exploreAllLink={generateURL({ cityVal: "Toronto" })}
        >
          <Slider data={TORONTOHOMES} type="resale" />
        </PropertyDisplaySection>
        <CanadianCitiesShowcase />
        {/* <PropertiesDisplayer
          topic={"Fireplaces"}
          subtitle={
            "Where marshmallows meet their toasty fate and cold feet find their cozy soulmates."
          }
          data={HOUSEWITHFIREPLACES}
        /> */}
        <PropertyDisplaySection
          title="Explore properties in Brampton"
          subtitle=""
          exploreAllLink={generateURL({ cityVal: "Brampton" })}
        >
          <Slider data={BRAMPTONHOMES} type="resale" />
        </PropertyDisplaySection>
        {/* <PropertiesDisplayer
          topic={"Separate Entrance"}
          subtitle={
            "A house with a separate entrance is like a mullet haircut - business in the front, party in the back."
          }
          bg="#454536"
          imageGradient="#99531b"
          data={HOUSEWITHSEPARATEENTRANCE}
        /> */}
        <PropertyDisplaySection
          title="Explore properties in Mississauga"
          subtitle=""
          exploreAllLink={generateURL({ cityVal: "Mississauga" })}
        >
          <Slider data={MISSISAUGAHOMES} type="resale" />
        </PropertyDisplaySection>
        <SpecificListings
          data={[
            { data: RESTAURANTS, topic: "Latest Restaurant Listings" },
            { data: MOTELS, topic: "Latest Convenience Store Listings" },
            { data: GASSTATIONS, topic: "Latest Gas Station Listings" },
          ]}
          topic="Hot Listings"
        />
        <PropertyDisplaySection
          title="Explore properties in Oakville"
          subtitle=""
          exploreAllLink={generateURL({ cityVal: "Oakville" })}
        >
          <Slider data={OAKVILLEHOMES} type="resale" />
        </PropertyDisplaySection>
        <PropertyDisplaySection
          title="The Commercialspot.ca Insights"
          subtitle=""
          exploreAllLink="/blogs"
        >
          <Slider data={BLOGPOSTS.slice(0, 4)} type="blog" />
        </PropertyDisplaySection>
        {/* <div className="flex flex-col items-center mt-40 sm:mt-40"></div> */}
        <ContactForm />
      </section>
      {/* pass props type="commercial" only for commercial card slider, default is commercial */}
    </>
  );
}
