import CurrencyInput from "components/currency-input/CurrencyInput";
import FileInput from "components/file-input/FileInput";
import Input from "components/input/Input";
import Textarea from "components/textarea/Textarea";

import SectionHeader from "app/components/section-header/SectionHeader";
import eventCategories from "utils/eventCategories";

const AddEventForm = () => {
  return (
    <section>
      <form className="grid grid-cols-1 lg:grid-cols-2">
        <section className="lg:border-r-4 lg:border-blue-light lg:pr-10">
          <SectionHeader
            title="Adicionar Eventos"
            subtitle="Crie o seu próprio evento da maneira que você preferir! :)"
          />

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
                <Input />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-blue-primary font-medium">
                Categoria do Evento
              </p>
              <div className="grid grid-cols-2 gap-y-2 lg:grid-cols-4">
                {eventCategories.map((category) => (
                  <div key={category.name} className="flex gap-1">
                    <input type="checkbox" />
                    <label className="text-xs text-blue-primary">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-blue-primary font-medium">Valor</p>
              <p className="text-gray-dark text-xs">
                Caso seu evento seja gratuito, o campo deverá ficar vazio. Se
                houver cupom promocional, basta colocar o código no campo
                “cupom”.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6">
              <div className="space-y-1">
                <label className="text-blue-primary font-medium">Preço</label>
                <CurrencyInput />
              </div>

              <div className="space-y-1">
                <label className="text-blue-primary font-medium">Setor</label>
                <Input />
              </div>

              <div className="space-y-1">
                <label className="text-blue-primary font-medium">Cupom</label>
                <Input />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-blue-primary font-medium">Descrição</label>
              <Textarea className="w-full" rows={6} />
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
                <label className="text-blue-primary font-medium">Banner</label>
                <p className="text-gray-dark text-xs">
                  Insira um banner no formato 336x280
                </p>
              </div>

              <FileInput className="max-w-xl" />
            </div>

            <div className="space-y-2">
              <div>
                <label className="text-blue-primary font-medium">Flyers</label>
                <p className="text-gray-dark text-xs">Insira até três flyers</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <FileInput className="w-full" />
                <FileInput className="w-full" />
                <FileInput className="w-full" />
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
      </form>
    </section>
  );
};

export default AddEventForm;
