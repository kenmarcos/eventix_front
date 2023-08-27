import EventCategories from "./components/event-categories/EventCategories";
import FeaturedEvents from "./components/featured-events/FeaturedEvents";
import Hero from "./components/hero/Hero";

import fetchWrapper from "utils/fetchWrapper";

export default async function Home() {
  const events = await fetchWrapper("/events/featuredEvents", {
    method: "GET",
    next: {
      revalidate: 60 * 60 * 24, // revalidar em 1 dia
    },
  });

  return (
    <div className="px-2 lg:px-10 mt-12 mb-24">
      <Hero event={events[0]} />

      <FeaturedEvents events={events} />

      <EventCategories />
    </div>
  );
}
