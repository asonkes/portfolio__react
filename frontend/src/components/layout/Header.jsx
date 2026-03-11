import { useEffect, useState, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  // On utilise un 'useEffect' pour pouvoir fermer notre 'burger' en cliquant en dehors de celui-ci
  useEffect(() => {
    let closeBurger = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", closeBurger);

    return () => {
      document.removeEventListener("mousedown", closeBurger);
    };
  }, []);

  return (
    <header className="w-full fixed z-50 bg-indigo-500 py-5">
      {/** Pas mettre la 'ref' dans ul
       * ==>  ici ref sur nav
       * ==> englobe tout le menu et donc fait partie de la nav...
       * ==> donc que je clique en dehors de l'icone ou pas pas ==> pas de problème
       * ==> tout le ul est compris dedans ==> a retenir si de nouveau le problème !!!
       *
       */}
      <nav className="relative" ref={menuRef}>
        <ul
          className={`
            lg:flex lg:justify-center lg:static lg:flex-row lg:w-auto bg-indigo-special
            absolute top-12 right-0 flex-col w-full
            ${showMenu ? "flex" : "hidden"}
            `}
        >
          <li
            className={`text-white text-xl tracking-widest hover:scale-110 lg:w-32 lg:py-0 ${showMenu ? "w-full text-center py-6" : ""}`}
          >
            <Link to="/#home">Accueil</Link>
          </li>
          <li
            className={`text-white text-xl tracking-widest hover:scale-110 lg:w-32 lg:py-0 ${showMenu ? "w-full text-center py-6" : ""}`}
          >
            <Link to="/#about">About</Link>
          </li>
          <li
            className={`text-white text-xl tracking-widest hover:scale-110 lg:w-32 lg:py-0 ${showMenu ? "w-full text-center py-6" : ""}`}
          >
            <Link to="/#projects">Projects</Link>
          </li>
          <li
            className={`text-white text-xl tracking-widest hover:scale-110 lg:w-32 lg:py-0 ${showMenu ? "w-full text-center py-6" : ""}`}
          >
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
        <div
          className="flex justify-end text-white text-3xl mr-5 cursor-pointer lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </nav>
    </header>
  );
};
