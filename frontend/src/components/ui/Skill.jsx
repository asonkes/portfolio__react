export const Skill = ({ element }) => {
  return (
    <div key={element.id} className="flex flex-col justify-center items-center">
      <li className="w-12 h-12 lg:w-15 lg:h-15 flex justify-center items-center rounded-full bg-indigo-500">
        <img
          src={element.img}
          alt={element.title}
          className="w-9 h-9 lg:w-11 lg:h-11 p-1"
        />
      </li>

      <div className="block text-md text-white text-center mt-1">
        {element.title}
      </div>
    </div>
  );
};
