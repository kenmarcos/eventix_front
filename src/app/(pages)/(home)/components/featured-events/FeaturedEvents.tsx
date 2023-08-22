import Link from "next/link";

import EventCard from "components/event-card";

import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Event } from "types/events";

interface FeaturedEventsProps {
  events: Event[];
}

const FeaturedEvents = ({ events }: FeaturedEventsProps) => {
  return (
    <section className="mt-10">
      <header className="text-blue-primary space-y-2 mb-2">
        <h2 className="text-2xl font-medium">Eventos em destaque</h2>

        <p>Se divirta com os principais eventos do Brasil!</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-2">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <EventCard.Root className="group">
              <EventCard.Image
                src={`http://localhost:3333/uploads/${event.banner}`}
                alt={event.title}
              />

              <EventCard.Info className="pt-1 pb-3 px-4 inset-0 flex flex-col justify-between">
                <h3 className="py-1 text-2xl sm:text-4xl font-bold truncate">
                  {event.title}
                </h3>

                <div className="flex gap-4 flex-wrap">
                  <div className="flex items-center gap-1 text-xs sm:text-base">
                    <CalendarDaysIcon className="w-3 sm:w-6" />
                    <time>
                      {new Date(event.date).getDate()}/
                      {new Date(event.date).getMonth() + 1}/
                      {new Date(event.date).getFullYear()}
                    </time>
                  </div>

                  <div className="flex items-center gap-1 text-xs sm:text-base">
                    <ClockIcon className="w-3 sm:w-6" />
                    <time>{new Date(event.date).getHours()}h</time>
                  </div>

                  <div className="flex items-center gap-1 text-xs sm:text-base">
                    <MapPinIcon className="w-3 sm:w-6" />
                    <p>{event.city}</p>
                  </div>
                </div>
              </EventCard.Info>
            </EventCard.Root>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;
