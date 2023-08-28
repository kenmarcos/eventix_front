import Image from "next/image";

import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface BannerProps {
  image: string;
  title: string;
  date: Date;
  formattedAddress: string;
}

const Banner = ({ image, title, date, formattedAddress }: BannerProps) => {
  return (
    <section>
      <div className="relative w-full h-[306px]">
        <Image
          src={image}
          alt="Banner do evento"
          className="object-cover"
          fill
          sizes="100%"
        />

        <div className="absolute w-full py-4 px-10 bottom-0 space-y-4 bg-description-gradient text-white">
          <h3 className="text-2xl sm:text-4xl font-bold truncate">{title}</h3>

          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-1 text-xs sm:text-base">
              <CalendarDaysIcon className="w-3 sm:w-6" />
              <time>
                {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
              </time>
            </div>

            <div className="flex items-center gap-1 text-xs sm:text-base">
              <ClockIcon className="w-3 sm:w-6" />
              <time>{date.getHours()}h</time>
            </div>

            <div className="flex items-center gap-1 text-xs sm:text-base">
              <MapPinIcon className="w-3 sm:w-6" />
              <p>{formattedAddress.split("-")[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
