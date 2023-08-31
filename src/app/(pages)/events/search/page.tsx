import React from "react";

import SearchEventsForm from "./components/search-events-form/SearchEventsForm";
import SearchResult from "./components/search-result/SearchResult";

const SearchEvents = () => {
  return (
    <div className="px-2 pt-12 pb-12 lg:px-10 grid grid-cols-1 lg:grid-cols-2 lg:h-full">
      <SearchEventsForm />

      <hr className="border-t-4 border-blue-light my-10 lg:hidden" />

      <SearchResult />
    </div>
  );
};

export default SearchEvents;
