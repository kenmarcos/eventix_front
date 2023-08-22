"use client";

import Button from "components/button/Button";
import Input from "components/input/Input";
import SliderInput from "components/slider-input/SliderInput";

import SectionHeader from "app/components/section-header/SectionHeader";
import eventCategories from "utils/eventCategories";
import formatPrice from "utils/formatPrice";

const SearchEventsForm = () => {
  return (
    <section className="lg:border-r-4 lg:border-blue-light lg:pr-10">
      <SectionHeader
        title="Pesquisar Eventos"
        subtitle="Busque o evento que é a sua cara de maneira mais detalhada!"
      />

      <form>
        <div className="mt-10 space-y-4">
          <div className="space-y-1">
            <label className="text-blue-primary font-medium">Título</label>
            <Input />
          </div>

          <div className="space-y-1">
            <label className="text-blue-primary font-medium">Endereço</label>
            <Input />
          </div>

          <div className="grid grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-y-0 lg:gap-x-6">
            <div className="space-y-1">
              <label className="text-blue-primary font-medium">Data</label>
              <Input />
            </div>

            <div className="space-y-1">
              <label className="text-blue-primary font-medium">Horário</label>
              <select
                defaultValue=""
                className="border border-blue-light rounded-lg px-4 py-1 bg-white focus:outline-none w-full"
              >
                <option value="" disabled>
                  Selecione
                </option>
                {eventCategories.map((category) => (
                  <option key={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-blue-primary font-medium">Distância</label>
            <SliderInput
              min={0}
              max={40}
              formatLabel={(value) => `${value} km`}
              step={5}
            />
          </div>

          <div className="space-y-1">
            <label className="text-blue-primary font-medium">Valor</label>
            <SliderInput
              min={0}
              max={10000}
              formatLabel={(value) => formatPrice(value)}
              step={1000}
            />
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <Button
            variant="outline-primary"
            className="rounded-full w-full lg:w-40"
          >
            Limpar
          </Button>
          <Button className="rounded-full w-full lg:w-40">Buscar</Button>
        </div>
      </form>
    </section>
  );
};

export default SearchEventsForm;
