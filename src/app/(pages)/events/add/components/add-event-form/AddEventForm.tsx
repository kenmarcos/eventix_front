"use client";

import { Controller, useFieldArray, useForm } from "react-hook-form";

import AddressAutocompleteInput from "components/address-autocomplete-input/AddressAutocompleteInput";
import Button from "components/button/Button";
import CurrencyInput from "components/currency-input/CurrencyInput";
import FileInput from "components/file-input/FileInput";
import Input from "components/input/Input";
import Textarea from "components/textarea/Textarea";

import { TrashIcon } from "@heroicons/react/24/outline";
import SectionHeader from "app/components/section-header/SectionHeader";
import eventCategories from "utils/eventCategories";
import fetchWrapper from "utils/fetchWrapper";

interface AddEventFormProps {
  title: string;
  coupom: string;
  date: string;
  latitude: string;
  longitude: string;
  time: string;
  price: { sector: string; amount: string }[];
  description: string;
  categories: string;
  // map: File;
  banner: FileList;
  flyers: any;
}

const AddEventForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<AddEventFormProps>({
    defaultValues: {
      flyers: Array(3).fill({} as FileList),
      price: [{ sector: "", amount: "" }],
    },
  });

  const { fields: flyerFields } = useFieldArray({
    name: "flyers",
    control,
  });

  const {
    fields: priceFields,
    append: priceAppend,
    remove: priceRemove,
  } = useFieldArray({
    name: "price",
    control,
  });

  const handleSubmitForm = async (data: AddEventFormProps) => {
    console.log(data);

    const formattedData = new Date(`${data.date}T${data.time}`);

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("coupom", data.coupom);
    formData.append("date", formattedData.toISOString());
    formData.append("location[latitude]", data.latitude);
    formData.append("location[longitude]", data.longitude);
    formData.append("description", data.description);
    formData.append("categories", data.categories);
    formData.append("banner", data.banner[0]);
    data.price.forEach((price: any) => {
      formData.append("price[]", JSON.stringify(price));
    });
    data.flyers.forEach((flyer: any) => {
      formData.append("flyers", flyer[0]);
    });

    try {
      const response = await fetchWrapper(`/events`, {
        method: "POST",
        body: formData,
      });
      // toast.success('Evento criado com sucesso!');
      console.log("🚀 ~ file: page.tsx:49 ~ onSubmit ~ response:", response);
    } catch (error) {
      // toast.error('Erro ao criar evento');
      console.log("🚀 ~ file: page.tsx:48 ~ onSubmit ~ error:", error);
    }
  };

  const onSelect = (address: any) => {
    setValue("latitude", address.lat);
    setValue("longitude", address.lng);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <section className="lg:border-r-4 lg:border-blue-light lg:pr-10">
            <SectionHeader
              title="Adicionar Eventos"
              subtitle="Crie o seu próprio evento da maneira que você preferir! :)"
            />

            <div className="mt-10 space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="title"
                  className="text-blue-primary font-medium"
                >
                  Título
                </label>
                <Input
                  id="title"
                  {...register("title")}
                  placeholder="Insira o nome do evento"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="address"
                  className="text-blue-primary font-medium"
                >
                  Endereço
                </label>
                <AddressAutocompleteInput
                  id="address"
                  onSelect={onSelect}
                  placeholder="Insira o endereço"
                />
              </div>

              <div className="grid grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-y-0 lg:gap-x-6">
                <div className="space-y-1">
                  <label
                    htmlFor="date"
                    className="text-blue-primary font-medium"
                  >
                    Data
                  </label>
                  <Input id="date" {...register("date")} type="date" />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="time"
                    className="text-blue-primary font-medium"
                  >
                    Horário
                  </label>
                  <Input id="time" {...register("time")} type="time" />
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-blue-primary font-medium">
                  Categoria do Evento
                </p>
                <div className="grid grid-cols-2 gap-y-2 lg:grid-cols-4">
                  {eventCategories.map((category) => (
                    <div key={category.name} className="flex gap-1">
                      <input
                        id={category.name}
                        type="checkbox"
                        value={category.name}
                        {...register("categories")}
                      />
                      <label
                        htmlFor={category.name}
                        className="text-xs text-blue-primary"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-blue-primary font-medium">Valor</p>
                <p className="text-gray-dark text-xs">
                  Caso seu evento seja gratuito, o campo deverá ficar vazio.
                  Caso haja mais de um setor, basta adicionar. Se houver cupom
                  promocional, basta colocar o código no campo “cupom”.
                </p>
              </div>

              {priceFields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-7 gap-2">
                  <div className="col-span-6 grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label
                        htmlFor="sector"
                        className="text-blue-primary font-medium"
                      >
                        Setor
                      </label>
                      <Input
                        id="sector"
                        {...register(`price.${index}.sector`)}
                        placeholder="Insira o setor"
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="price"
                        className="text-blue-primary font-medium"
                      >
                        Preço
                      </label>
                      <Controller
                        name={`price.${index}.amount`}
                        control={control}
                        render={({ field }) => (
                          <CurrencyInput
                            id="price"
                            allowDecimals={false}
                            onValueChange={field.onChange}
                            placeholder="R$ 0,00"
                            value={field.value}
                          />
                        )}
                      />
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="danger"
                    className="h-[38px] self-end rounded-lg flex justify-center"
                    onClick={() => priceRemove(index)}
                  >
                    <TrashIcon width={12} />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline-primary"
                className="h-[38px] w-full self-end rounded-lg"
                onClick={() => priceAppend({ sector: "", amount: "" })}
              >
                Adicionar Setor
              </Button>

              <div className="space-y-1">
                <label
                  htmlFor="coupom"
                  className="text-blue-primary font-medium"
                >
                  Cupom
                </label>
                <Input
                  id="coupom"
                  {...register("coupom")}
                  placeholder="Insira o código"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="description"
                  className="text-blue-primary font-medium"
                >
                  Descrição
                </label>
                <Textarea
                  id="description"
                  className="w-full"
                  rows={6}
                  {...register("description")}
                  placeholder="Dê uma descrição que vai embalar o seu público!"
                />
              </div>
            </div>
          </section>

          <hr className="border-t-4 border-blue-light my-10 lg:hidden" />

          <section className="lg:pl-10">
            <SectionHeader
              title="Área Criativa"
              subtitle="Adicione as imagens referentes ao seu evento!"
            />

            <div className="mt-10 space-y-8">
              <div className="space-y-2">
                <div>
                  <label className="text-blue-primary font-medium">
                    Banner
                  </label>
                  <p className="text-gray-dark text-xs">
                    Insira um banner para o seu evento
                  </p>
                </div>

                <FileInput {...register("banner")} className="max-w-xl" />
              </div>

              <div className="space-y-2">
                <div>
                  <label className="text-blue-primary font-medium">
                    Flyers
                  </label>
                  <p className="text-gray-dark text-xs">
                    Insira até três flyers
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {flyerFields.map((field, index) => (
                    <FileInput
                      key={field.id}
                      className="w-full max-w-xl"
                      {...register(`flyers.${index}`)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <label className="text-blue-primary font-medium">
                    Mapa do Evento
                  </label>
                  <p className="text-gray-dark text-xs">
                    Insira o Mapa do Evento indicando os setores
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-14 text-center">
          <Button type="submit" className="rounded-full w-full lg:w-1/2">
            Cadastrar Evento
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddEventForm;
