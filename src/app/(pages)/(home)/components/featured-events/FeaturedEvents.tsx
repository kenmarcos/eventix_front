import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const FeaturedEvents = () => {
  return (
    <section className="mt-10">
      <header className="text-blue-primary space-y-2 mb-2">
        <h2 className="text-2xl font-medium">Eventos em destaque</h2>

        <p>Se divirta com os principais eventos do Brasil!</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-2">
        <div className="relative rounded-3xl overflow-hidden shadow-md shadow-blue-dark">
          <div className="w-full h-[200px] bg-black bg-opacity-25 shadow"></div>

          <div className="absolute w-full py-4 px-10 bottom-0 space-y-4 bg-description-gradient text-white">
            <h3 className="text-2xl sm:text-4xl font-bold truncate">
              Jorge e Mateus
            </h3>

            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-1 text-xs sm:text-base">
                <CalendarDaysIcon className="w-3 sm:w-6" />
                <time>08/07/2023</time>
              </div>

              <div className="flex items-center gap-1 text-xs sm:text-base">
                <ClockIcon className="w-3 sm:w-6" />
                <time>14h</time>
              </div>

              <div className="flex items-center gap-1 text-xs sm:text-base">
                <MapPinIcon className="w-3 sm:w-6" />
                <p>Mineirão - Belo Horizonte</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-md shadow-blue-dark">
          <div className="w-full h-[150px] bg-black bg-opacity-25 shadow"></div>

          <div className="absolute w-full py-4 px-10 bottom-0 space-y-4 bg-description-gradient text-white">
            <h3 className="text-2xl sm:text-4xl font-bold truncate">
              Jorge e Mateus
            </h3>

            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-1 text-xs sm:text-base">
                <CalendarDaysIcon className="w-3 sm:w-6" />
                <time>08/07/2023</time>
              </div>

              <div className="flex items-center gap-1 text-xs sm:text-base">
                <ClockIcon className="w-3 sm:w-6" />
                <time>14h</time>
              </div>

              <div className="flex items-center gap-1 text-xs sm:text-base">
                <MapPinIcon className="w-3 sm:w-6" />
                <p>Mineirão - Belo Horizonte</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-md shadow-blue-dark">
          <div className="w-full h-[150px] bg-black bg-opacity-25 shadow"></div>

          <div className="absolute w-full py-4 px-10 bottom-0 space-y-4 bg-description-gradient text-white">
            <h3 className="text-2xl sm:text-4xl font-bold truncate">
              Jorge e Mateus
            </h3>

            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-1 text-xs sm:text-base">
                <CalendarDaysIcon className="w-3 sm:w-6" />
                <time>08/07/2023</time>
              </div>

              <div className="flex items-center gap-1 text-xs sm:text-base">
                <ClockIcon className="w-3 sm:w-6" />
                <time>14h</time>
              </div>

              <div className="flex items-center gap-1 text-xs sm:text-base">
                <MapPinIcon className="w-3 sm:w-6" />
                <p>Mineirão - Belo Horizonte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
