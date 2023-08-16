import Image from "next/image";
import Link from "next/link";

import eventCategories from "utils/eventCategories";

const EventCategories = () => {
  return (
    <section className="mt-10">
      <header className="text-blue-primary space-y-2 mb-2">
        <h2 className="text-2xl font-medium">Navegue por tipo de evento</h2>

        <p>Escolha o evento que é a sua cara :D</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-7">
        {eventCategories.map((category) => (
          <Link key={category.name} href={category.slug} className="group">
            <div className="flex flex-col items-center">
              <Image
                src={category.image}
                alt={category.name}
                width={144}
                height={144}
                className="group-hover:scale-105"
              />

              <p className="font-medium text-blue-primary group-hover:text-red-500">
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;
