"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { Event } from "types/events";

interface EventsProviderData {
  filteredEvents: Event[];
  setFilteredEvents: Dispatch<SetStateAction<Event[]>>;
}

interface EventsProviderProps {
  children: React.ReactNode;
}

const EventsContext = createContext<EventsProviderData>(
  {} as EventsProviderData
);

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  return (
    <EventsContext.Provider value={{ filteredEvents, setFilteredEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => useContext(EventsContext);
