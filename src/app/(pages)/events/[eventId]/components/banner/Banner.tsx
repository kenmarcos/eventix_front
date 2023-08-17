import Image from "next/image";

import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Banner = () => {
  return (
    <section>
      <div className="relative w-full h-[306px]">
        <div className="bg-gray-500 h-full" />

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
    </section>
  );
};

export default Banner;