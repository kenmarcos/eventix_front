import Banner from "./components/banner/Banner";
import EventInfo from "./components/event-info/EventInfo";
import Tickets from "./components/tickets/Tickets";

const EventDetails = () => {
  return (
    <div className="mb-24">
      <Banner />

      <div className="px-2 mt-8 grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:mx-10">
        <EventInfo />

        <Tickets />
      </div>
    </div>
  );
};

export default EventDetails;
