export const Header = () => {
  return (
    <header className="w-full fixed z-50 bg-indigo-500 py-5">
      <ul className="flex justify-center">
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
    </header>
  );
};
