import { useState } from "react";

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="w-full fixed z-50 bg-indigo-500 py-5 border-4 border-red-600">
      <nav className="flex border-4 border-amber-500">
        <ul className="hidden lg:flex lg:justify-center">
          <li className="w-32 text-white text-xl tracking-widest hover:scale-110">
            <a href="#">Accueil</a>
          </li>
          <li className="w-32 text-white text-xl tracking-widest hover:scale-110">
            <a href="#">About</a>
          </li>
          <li className="w-32 text-white text-xl tracking-widest hover:scale-110">
            <a href="#">Projects</a>
          </li>
          <li className="w-32 text-white text-xl tracking-widest hover:scale-110">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="block text-white text-xl lg:hidden">
          <i 
            class="fa-solid fa-bars"
          >
          </i>
          <i 
            class="fa-solid fa-xmark"
            className={isActive ? "hidden" : "block"}
          >
          </i>
        </div>
      </nav>
    </header>
  );
};
