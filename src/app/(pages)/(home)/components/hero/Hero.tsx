import Image from "next/image";
import Link from "next/link";

import EventCard from "components/event-card";

import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Event } from "types/events";

interface HeroProps {
  event: Event;
}

const Hero = ({ event }: HeroProps) => {
  const image = `http://localhost:3333/uploads/${event.banner}`;
  const date = new Date(event.date);

  return (
    <section>
      <Link href={`/events/${event.id}`}>
        <EventCard.Root className="h-72 group">
          <EventCard.Image src={image} alt={event.title} />

          <EventCard.Info className="bottom-0 py-4 px-10">
            <h3 className="py-1 text-2xl sm:text-4xl font-bold truncate">
              {event.title}
            </h3>

            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-1 text-xs sm:text-base">
                <CalendarDaysIcon className="w-3 sm:w-6" />
                <time>
                  {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                </time>
              </div>

              <div className="flex items-center gap-1 text-xs sm:text-base">
                <ClockIcon className="w-3 sm:w-6" />
                <time>{date.getHours()}h</time>
              </div>

              <div className="flex items-center gap-1 text-xs sm:text-base">
                <MapPinIcon className="w-3 sm:w-6" />
                <p>{event.formattedAddress}</p>
              </div>
            </div>
          </EventCard.Info>
        </EventCard.Root>
      </Link>
    </section>
  );
};

export default Hero;
