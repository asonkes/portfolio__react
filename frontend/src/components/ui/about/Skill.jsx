/********************************************/
/*** Composant Skill - partie compétences ***/
/********************************************/

export const Skill = ({ element }) => {
  return (
    <li key={element.id} className="flex flex-col justify-center items-center">
      <div className="w-12 h-12 flex justify-center items-center rounded-full bg-indigo-500 lg:w-15 lg:h-15">
        <img
          src={element.img}
          alt={`Logo de ${element.title}`}
          className="w-9 h-9 p-1 lg:w-11 lg:h-11"
        />
      </div>

      <div className="block text-md text-white text-center mt-1">
        {element.title}
      </div>
    </li>
  );
};
