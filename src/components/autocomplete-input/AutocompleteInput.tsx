"use client";

import { ChangeEvent, useState } from "react";

import Input from "components/input/Input";

const AutocompleteInput = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const response = await fetch(`/api?input=${value}`, {
      method: "GET",
    });

    const data = await response.json();

    setSuggestions(data.predictions);
  };

  const handleSelect = async (address: any) => {
    setInputValue(address.description);
    setSuggestions([]);
  };

  return (
    <>
      <Input type="text" onChange={handleChange} value={inputValue} />

      <ul className="rounded bg-white shadow">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.place_id}
            className="p-2 cursor-pointer hover:bg-gray-primary"
            onClick={() => handleSelect(suggestion)}
          >
            {suggestion.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AutocompleteInput;
