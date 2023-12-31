"use client";

import { useFieldArray, useForm } from "react-hook-form";

import Button from "components/button/Button";
import CurrencyInput from "components/currency-input/CurrencyInput";
import Input from "components/input/Input";

import { Event } from "types/events";
import formatPrice from "utils/formatPrice";

interface TicketsProps {
  event: Event;
}
interface TicktesFormProps {
  name: string;
  email: string;
  quantity: number;
  tickets: { sector: string; amount: string; quantity: number }[];
}

const Tickets = ({ event }: TicketsProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<TicktesFormProps>({
    defaultValues: {
      tickets: event.price.map((price) => {
        return {
          sector: JSON.parse(price).sector,
          amount: JSON.parse(price).amount,
          quantity: 0,
        };
      }),
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "tickets",
    control,
  });

  const handleOnSubmit = (data: any) => {
    console.log(data);
  };

  const incrementTicket = (index: number) => {
    if (Number(watch(`tickets.${index}.quantity`)) >= 99) return;
    setValue(
      `tickets.${index}.quantity`,
      Number(watch(`tickets.${index}.quantity`)) + 1
    );
  };

  const decrementTicket = (index: number) => {
    if (Number(watch(`tickets.${index}.quantity`)) <= 0) return;
    setValue(
      `tickets.${index}.quantity`,
      Number(watch(`tickets.${index}.quantity`)) - 1
    );
  };

  return (
    <section>
      <div className="sticky top-24 rounded-3xl overflow-hidden shadow-lg">
        <header className="bg-blue-primary py-3">
          <h3 className="text-xl text-white text-center">Ingressos</h3>
        </header>

        <form className="p-6 space-y-6" onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex justify-between items-center gap-2"
              >
                <div>
                  <label className="text-blue-dark font-medium">
                    {field.sector}
                  </label>
                  <p className="text-xs text-blue-primary text-blue primary">
                    {formatPrice(Number(field.amount))}
                  </p>
                </div>

                <div className="flex gap-1">
                  <Button
                    type="button"
                    className="p-0 rounded w-8 h-8"
                    onClick={() => decrementTicket(index)}
                  >
                    -
                  </Button>
                  <input
                    {...register(`tickets.${index}.quantity`)}
                    type="number"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-8 h-8 text-center focus:outline-none border border-blue-light rounded"
                  />
                  <Button
                    type="button"
                    className="p-0 rounded w-8 h-8"
                    onClick={() => incrementTicket(index)}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-3 gap-x-6">
              <div className="col-span-2 space-y-1">
                <label className="text-blue-dark font-medium">Cupom</label>
                <Input type="text" placeholder="Insira o código" />
              </div>

              <div className="col-span-1 space-y-1">
                <label className="text-blue-dark font-medium">Subtotal</label>
                <CurrencyInput type="text" placeholder="R$ 0,00" />
              </div>
            </div>

            <div className="col-span-2 space-y-1">
              <label className="text-blue-dark font-medium">Nome</label>
              <Input
                type="text"
                placeholder="Insira o seu nome completo"
                {...register("name")}
              />
            </div>

            <div className="col-span-2 space-y-1">
              <label className="text-blue-dark font-medium">E-mail</label>
              <Input
                type="text"
                placeholder="Insira seu melhor e-mail"
                {...register("email")}
              />
            </div>
          </div>

          <Button type="submit" className="rounded-full w-full">
            Comprar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Tickets;
