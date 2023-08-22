import Button from "components/button/Button";
import CurrencyInput from "components/currency-input/CurrencyInput";
import Input from "components/input/Input";

const Tickets = () => {
  return (
    <section>
      <div className="sticky top-24 rounded-3xl overflow-hidden shadow-lg">
        <header className="bg-blue-primary py-3">
          <h3 className="text-xl text-white text-center">Ingressos</h3>
        </header>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center gap-2">
              <div>
                <label className="text-blue-dark font-medium">Pista</label>
                <p className="text-xs text-blue-primary text-blue primary">
                  Entrada e acesso à pista do evento.
                </p>
              </div>

              <div className="flex gap-1">
                <Button className="p-0 rounded w-8 h-8">-</Button>
                <input
                  type="number"
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-8 h-8 text-center focus:outline-none border border-blue-light rounded"
                />
                <Button className="p-0 rounded w-8 h-8">+</Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-6">
              <div className="col-span-2 space-y-1">
                <label className="text-blue-dark font-medium">Cupom</label>
                <Input placeholder="Insira um cupom de desconto" />
              </div>

              <div className="col-span-1 space-y-1">
                <label className="text-blue-dark font-medium">Subtotal</label>
                <CurrencyInput placeholder="R$0,00" />
              </div>
            </div>

            <div className="col-span-2 space-y-1">
              <label className="text-blue-dark font-medium">Nome</label>
              <Input placeholder="Insira o seu nome completo" />
            </div>

            <div className="col-span-2 space-y-1">
              <label className="text-blue-dark font-medium">E-mail</label>
              <Input placeholder="Insira seu melhor e-mail" />
            </div>
          </div>

          <Button className="rounded-full w-full">Comprar</Button>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
