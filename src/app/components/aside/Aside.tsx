import Link from "next/link";

import {
  DocumentPlusIcon,
  FunnelIcon,
  HomeIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { icon: <HomeIcon width={24} />, name: "Home", href: "#" },
  { icon: <MapPinIcon width={24} />, name: "Mapa", href: "#" },
  {
    icon: <DocumentPlusIcon width={24} />,
    name: "Adicionar Evento",
    href: "#",
  },
  { icon: <FunnelIcon width={24} />, name: "Filtrar Eventos", href: "#" },
  { icon: <QuestionMarkCircleIcon width={24} />, name: "SAC", href: "#" },
  {
    icon: <ShieldExclamationIcon width={24} />,
    name: "Privacidade",
    href: "#",
  },
];

const Aside = () => {
  return (
    <aside className="hidden w-24 bg-blue-extraLight shadow-asideMenu px-4 py-6 lg:block">
      <p className="text-blue-primary text-center text-xl mb-10 font-semibold">
        Menu
      </p>

      <nav className="flex flex-col gap-8">
        {navigation.map((nav) => (
          <Link key={nav.name} href={nav.href}>
            <div className="flex flex-col items-center text-center text-blue-primary hover:drop-shadow-xl hover:brightness-50 hover:scale-105">
              {nav.icon}
              <p className="text-xs">{nav.name}</p>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Aside;
