"use client";

import { ChangeEvent, useState } from "react";

import Input from "components/input/Input";

interface AddressAutocompleteInputProps {
  onSelect: (address: any) => void;
  id?: string;
  placeholder?: string;
}

const AddressAutocompleteInput = ({
  onSelect,
  id,
  placeholder,
}: AddressAutocompleteInputProps) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value !== "") {
      const response = await fetch(`/api/maps?input=${value}`, {
        method: "GET",
      });

      const data = await response.json();

      setSuggestions(data.predictions);
    }

    if (event.target.value === "") {
      setSuggestions([]);
    }
  };

  const selectOption = async (address: any) => {
    setInputValue(address.description);
    setSuggestions([]);

    try {
      const response = await fetch(`/api/maps?placeId=${address.place_id}`, {
        method: "GET",
      });

      const data = await response.json();

      if (data.result.geometry.location) {
        onSelect(data.result.geometry.location);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Input
        id={id}
        onChange={handleChange}
        value={inputValue}
        placeholder={placeholder}
      />

      <ul className="rounded bg-white shadow">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.place_id}
            className="p-2 cursor-pointer hover:bg-gray-primary"
            onClick={() => selectOption(suggestion)}
          >
            {suggestion.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddressAutocompleteInput;
