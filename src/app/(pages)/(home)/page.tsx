import EventCategories from "./components/event-categories/EventCategories";
import FeaturedEvents from "./components/featured-events/FeaturedEvents";
import Hero from "./components/hero/Hero";

import fetchWrapper from "utils/fetchWrapper";

export default async function Home() {
  const response = await fetchWrapper("/events/featuredEvents", {
    method: "GET",
  });

  return (
    <div className="px-2 lg:px-10 mt-12 mb-24">
      <Hero event={response[0]} />

      <FeaturedEvents events={response} />

      <EventCategories />
    </div>
  );
}
