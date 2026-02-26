import { useEffect, useState } from "react";

export const Skill = () => {
  // Appel à l'API
  const [APIState, setAPIState] = useState({
    error: false,
    data: undefined,
  });

  // On appelle les data
  // video : 11min56
  useEffect(() => {
    fetch("http://localhost:3000/skills")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAPIState({ error: false, data });
      })
      .catch(() => {
        setAPIState({ error: true, data: undefined });
      });
  }, []);

  // Contenu que l'on veut retourner
  let content;
  if (APIState.error) content = <p>Une erreur est survenue...</p>;
  else if (APIState.data?.length > 0) {
    content = (
      <>
        {APIState.data.map((element) => {
          return (
            <div
              key={element.id}
              className="flex flex-col justify-center items-center"
            >
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
        })}
      </>
    );
  } else if (APIState.data?.length === 0) {
    content = <p>Votre requête ne correspond à aucune donnée !</p>;
  }

  return (
    <ul className="w-8/12 m-auto md:w-5/12 lg:w-full flex justify-center items-center flex-wrap gap-5">
      {content}
    </ul>
  );
};
