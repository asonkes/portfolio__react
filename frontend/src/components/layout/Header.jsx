import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full fixed z-50 bg-indigo-500 py-5">
      <nav className="relative">
        <ul
          className={`
            lg:flex lg:justify-center lg:static lg:flex-row lg:w-auto border-4 bg-indigo-500
            absolute top-14 right-0 flex-col w-full
            border-amber-400
            ${showMenu ? "hidden" : "flex"}
            `}
        >
          <li
            className={`text-white text-xl tracking-widest hover:scale-110 lg:w-32 lg:py-0 ${showMenu ? "" : "w-full text-center py-6"}`}
          >
            <a href="#">Accueil</a>
          </li>
          <li
            className={`text-white text-xl tracking-widest hover:scale-110 lg:w-32 lg:py-0 ${showMenu ? "" : "w-full text-center py-6"}`}
          >
            <a href="#">About</a>
          </li>
          <li
            className={`text-white text-xl tracking-widest hover:scale-110 lg:w-32 lg:py-0 ${showMenu ? "" : "w-full text-center py-6"}`}
          >
            <a href="#">Projects</a>
          </li>
          <li
            className={`text-white text-xl tracking-widest hover:scale-110 lg:w-32 lg:py-0 ${showMenu ? "" : "w-full text-center py-6"}`}
          >
            <a href="#">Contact</a>
          </li>
        </ul>
        <div
          className="flex justify-end text-white text-4xl mr-5 cursor-pointer lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <i class="fa-solid fa-bars"></i>
          ) : (
            <i class="fa-solid fa-xmark"></i>
          )}
        </div>
      </nav>
    </header>
  );
};
