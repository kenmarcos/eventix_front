"use client";

import Link from "next/link";

import Button from "components/button/Button";
import EventCard from "components/event-card";

import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "app/components/section-header/SectionHeader";
import { useEvents } from "context/events";

const SearchResult = () => {
  const { filteredEvents, setFilteredEvents } = useEvents();

  return (
    <section className="lg:pl-10">
      <SectionHeader
        title="Resultados da busca"
        subtitle="Explore os resultados da sua busca por diversão! :)"
      />

      <ul className="mt-10 space-y-6">
        {filteredEvents.map((event) => (
          <li key={event._id}>
            <EventCard.Root>
              <div className="relative h-44">
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
                      <p>{event.formattedAddress.split("-")[1]}</p>
                    </div>
                  </div>
                </EventCard.Info>
              </div>

              <div className="p-6 bg-gray-primary space-y-4 text-blue-primary">
                <p>{event.description}</p>

                <div className="text-center">
                  <Link href={`/events/${event._id}`}>
                    <Button className="rounded-full w-full lg:w-1/2">
                      Ver Detalhes do Evento
                    </Button>
                  </Link>
                </div>
              </div>
            </EventCard.Root>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SearchResult;
