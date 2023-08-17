const EventInfo = () => {
  return (
    <section className="font-light text-blue-primary space-y-4">
      <section>
        <h4 className="text-xl font-medium">Descrição do Evento</h4>

        <ul>
          <li>DATA: 08/07/2023</li>
          <li>LOCAL: Mineirão</li>
          <li>ABERTURA: 16:00 horas</li>
          <li>MAPA DO EVENTO: Em breve</li>
        </ul>
      </section>
      <section>
        <h4 className="text-xl text-blue-primary font-medium">Setores</h4>

        <ul>
          <li>- Arena (não open bar)</li>
          <li>- Frontstage (não open bar)</li>
          <li>
            - Camarote Único (open bar: água, refrigerante, cerveja, vodka
            importada, gin e whisky)
          </li>
          <li>- Lounges (open bar e open food) - Vendas em breve!</li>
        </ul>
      </section>
      <section>
        <h4 className="text-xl text-blue-primary font-medium">Ingressos</h4>

        <ul>
          <li>
            - Meia (obrigatório apresentação da carteira oficial do estudante)
          </li>
          <li>- Social (levar 01 kg de alimento não perecível)</li>
          <li>- Inteira</li>
        </ul>
      </section>
      <section>
        <h4 className="text-xl text-blue-primary font-medium">Classificação</h4>

        <p>
          16 e 17 anos acompanhados do responsável legal ou com autorização dos
          pais registrado em cartório (em setores não open bar).
        </p>
      </section>
    </section>
  );
};

export default EventInfo;
