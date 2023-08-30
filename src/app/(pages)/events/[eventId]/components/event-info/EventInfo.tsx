import { Event } from "types/events";
import formatPrice from "utils/formatPrice";

interface EventInfoProps {
  event: Event;
}

const EventInfo = ({ event }: EventInfoProps) => {
  const date = new Date(event.date);

  return (
    <section className="font-light text-blue-primary space-y-4 lg:col-span-2 lg:pr-24">
      <section>
        <h4 className="text-xl text-blue-primary font-medium">
          Descrição do Evento
        </h4>

        <p>{event.description}</p>
      </section>

      <section>
        <h4 className="text-xl font-medium">Informações</h4>

        <ul>
          <li>
            DATA: {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
          </li>
          <li>ABERTURA: {date.getHours()} horas</li>
          <li>LOCAL: {event.formattedAddress}</li>
          <li>MAPA DO EVENTO: Em breve</li>
        </ul>
      </section>

      <section>
        <h4 className="text-xl text-blue-primary font-medium">Setores</h4>

        <ul>
          {event.price.map((price) => (
            <li key={JSON.parse(price).sector}>
              - {JSON.parse(price).sector} (
              {formatPrice(Number(JSON.parse(price).amount))})
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default EventInfo;
