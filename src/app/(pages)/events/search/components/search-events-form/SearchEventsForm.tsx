"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "components/button/Button";
import Input from "components/input/Input";

import SectionHeader from "app/components/section-header/SectionHeader";
import { useEvents } from "context/events";
import eventCategories from "utils/eventCategories";
import fetchWrapper from "utils/fetchWrapper";

interface SearchEventsFormProps {
  title: string;
  latitude: number;
  longitude: number;
  date: string;
  time: string;
  price: number[];
  categories: string;
  radius: number[];
}

const SearchEventsForm = () => {
  const { setFilteredEvents } = useEvents();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<SearchEventsFormProps>({
    defaultValues: {
      radius: [50],
      price: [9000],
    },
  });

  // const onSelect = (address: any) => {
  //   setValue("latitude", address.lat);
  //   setValue("longitude", address.lng);
  // };

  const handleOnSubmit = async (data: SearchEventsFormProps) => {
    try {
      const events = await fetchWrapper(
        `/events/filter?` +
          new URLSearchParams({
            title: data.title,
            categories: data.categories,
            date: data.date,
          }),
        {
          method: "GET",
        }
      );

      setFilteredEvents(events);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="lg:border-r-4 lg:border-blue-light lg:pr-10">
      <SectionHeader
        title="Pesquisar Eventos"
        subtitle="Busque o evento que é a sua cara de maneira mais detalhada!"
      />

      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="mt-10 space-y-4">
          <div className="space-y-1">
            <label htmlFor="title" className="text-blue-primary font-medium">
              Título
            </label>
            <Input
              id="title"
              {...register("title")}
              placeholder="Insira o nome do evento"
            />
          </div>

          {/* <div className="space-y-1">
            <label htmlFor="address" className="text-blue-primary font-medium">
              Endereço
            </label>
            <AddressAutocompleteInput
              id="address"
              onSelect={onSelect}
              placeholder="Insira o endereço"
            />
          </div> */}

          <div className="grid grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-y-0 lg:gap-x-6">
            <div className="space-y-1">
              <label htmlFor="date" className="text-blue-primary font-medium">
                Data
              </label>
              <Input id="date" {...register("date")} type="date" />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="category"
                className="text-blue-primary font-medium"
              >
                Categoria
              </label>
              <select
                {...register("categories")}
                defaultValue=""
                id="category"
                className="border border-blue-light rounded-lg px-4 py-1 bg-white focus:outline-none w-full"
              >
                <option value="" disabled>
                  Selecione
                </option>
                {eventCategories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* <div className="space-y-1">
            <label className="text-blue-primary font-medium">Distância</label>
            <Controller
              name="radius"
              control={control}
              render={({ field }) => (
                <SliderInput
                  min={0}
                  max={50}
                  formatLabel={(value) => `${value} km`}
                  step={10}
                  onValueChange={field.onChange}
                />
              )}
            />
          </div>

          <div className="space-y-1">
            <label className="text-blue-primary font-medium">Valor</label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <SliderInput
                  min={0}
                  max={10000}
                  formatLabel={(value) => formatPrice(value)}
                  step={1000}
                  onValueChange={field.onChange}
                />
              )}
            />
          </div> */}
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <Button
            type="button"
            variant="outline-primary"
            className="rounded-full w-full lg:w-40"
            onClick={() => reset()}
          >
            Limpar
          </Button>

          <Button type="submit" className="rounded-full w-full lg:w-40">
            Buscar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SearchEventsForm;
