import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-primary px-2 py-4">
      <div className="container mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <Link href="/">
          <Image
            src="/eventix-logo.svg"
            alt="Logo Eventix"
            width={300}
            height={58}
            className="w-52 lg:w-[300px]"
          />
        </Link>

        <div className="flex gap-2 w-full justify-around lg:justify-end">
          <Bars3Icon className="text-gray-primary w-7 sm:hidden" />
          <span className="text-gray-primary text-xl hidden sm:inline lg:hidden">
            Menu
          </span>
          <input type="text" className="w-9/12" />
        </div>
      </div>
    </header>
  );
};

export default Header;
