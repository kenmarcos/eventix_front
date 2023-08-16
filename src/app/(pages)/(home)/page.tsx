import EventCategories from "./components/event-categories/EventCategories";
import FeaturedEvents from "./components/featured-events/FeaturedEvents";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div className="px-2 lg:px-10 mt-12 mb-24">
      <Hero />

      <FeaturedEvents />

      <EventCategories />
    </div>
  );
}
