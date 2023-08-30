import { ReactNode } from "react";

import { EventsProvider } from "./events";

interface ContextsProviderProps {
  children: ReactNode;
}

const ContextsProvider = ({ children }: ContextsProviderProps) => {
  return <EventsProvider>{children}</EventsProvider>;
};

export default ContextsProvider;
