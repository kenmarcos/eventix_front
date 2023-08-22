import React from "react";

import SearchEventsForm from "./components/search-events-form/SearchEventsForm";
import SearchResult from "./components/search-result/SearchResult";

const SearchEvents = () => {
  return (
    <div className="px-2 lg:px-10 mt-12 mb-24 grid grid-cols-1 lg:grid-cols-2">
      <SearchEventsForm />

      <hr className="border-t-4 border-blue-light my-10 lg:hidden" />

      <SearchResult />
    </div>
  );
};

export default SearchEvents;
