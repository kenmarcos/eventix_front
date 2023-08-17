import Banner from "./components/banner/Banner";
import EventInfo from "./components/event-info/EventInfo";

const EventDetails = () => {
  return (
    <div className="mb-24">
      <Banner />

      <div className="px-2 mt-8 lg:mx-10">
        <EventInfo />
      </div>
    </div>
  );
};

export default EventDetails;
