import Banner from "./components/banner/Banner";
import EventInfo from "./components/event-info/EventInfo";
import Tickets from "./components/tickets/Tickets";

import fetchWrapper from "utils/fetchWrapper";

const EventDetails = async ({ params }: { params: { eventId: string } }) => {
  const event = await fetchWrapper(`/events/${params.eventId}`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });

  const image = `http://localhost:3333/uploads/${event.banner}`;
  const date = new Date(event.date);

  return (
    <div className="mb-24">
      <Banner
        image={image}
        title={event.title}
        date={date}
        formattedAddress={event.formattedAddress}
      />

      <div className="px-2 mt-8 grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:mx-10">
        <EventInfo event={event} />

        <Tickets event={event} />
      </div>
    </div>
  );
};

export default EventDetails;
