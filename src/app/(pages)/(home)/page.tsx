import FeaturedEvents from "./components/featured-events/FeaturedEvents";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div className="px-2 lg:px-10">
      <Hero />
      <FeaturedEvents />
    </div>
  );
}
