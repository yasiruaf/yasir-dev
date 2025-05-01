import { HEADER } from "@/utils/data/Header";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-transparent px-4 md:px-16">
      <div className="flex items-center justify-between py-7">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
            {HEADER.logoLabel}
          </Link>
        </div>

        <ul
          className="flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {HEADER.menus.map((menu) => (
            <li key={menu.name} className="group relative">
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href={menu.url}
              >
                <div className="text-white uppercase">
                  {menu.name}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#16f2b3] transition-all duration-700 group-hover:w-full"></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
