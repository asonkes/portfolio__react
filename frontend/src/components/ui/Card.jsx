import { useEffect, useState } from "react";
import { Button } from "./Button";
import { ButtonNeverBorder } from "./ButtonNeverBorder";

export const Card = () => {
  const [isHover, setIsHover] = useState(false);

  const [APIState, setAPIState] = useState({
    error: false,
    data: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:3000/projects")
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
            <li key={element.id} className="relative z-40 w-3/6 mb-5">
              <div className="relative z-40 w-full border border-white rounded-2xl">
                <h3 className="text-center text-2xl my-3">
                  <span className="text-fuchsia-300">{element.type}</span>
                  <span className="text-indigo-400">
                    {" "}
                    ( {element.formation} ){" "}
                  </span>
                </h3>
                {/**<p class="absolute w-32 -top-14 text-center text-18 text-white p-2 rounded-2xl">{element.date}</p>**/}
                <p className="text-center text-xl text-white my-3">
                  {element.title}
                </p>

                <div
                  className="relative w-full h-60 flex items-center"
                  onMouseEnter={() => setIsHover(element.id)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  {/** Image par défaut */}
                  <img
                    className={`absolute inset-0 w-full h-60 object-cover transition-all duration-300 ease-out ${isHover === element.id ? "opacity-0" : "opacity-100"}`}
                    src={element.img}
                    alt={element.title}
                  />

                  {/** Image en Hover */}
                  <div
                    className={`relative w-full h-60 flex justify-center items-center transition-all duration-750 ease-in ${isHover === element.id ? "opacity-100" : "opacity-0"}`}
                  >
                    <img
                      className="absolute inset-0 w-full h-60 object-cover"
                      src="/src/assets/images/background/flux-conception-code-binaire_53876-97406.webp"
                      alt="icone représentant le cycle du web"
                    />
                    <div className="absolute flex-col justify-center items-center">
                      <p className="my-2 text-lg tracking-wider">
                        {element.code}
                      </p>
                      <a
                        className="w-full flex justify-center"
                        href={element.site}
                        target="_blank"
                      >
                        <img
                          className="h-7.5 hover:scale-110"
                          src="/src/assets/images/icons/Globe-256.png"
                          alt="icone représentant le cycle du web"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <Button href={element.site} size="w-26">
                  Visiter le site
                </Button>
                <Button href={element.maquette} size="w-40">
                  Explorer la maquette
                </Button>
                <Button href={element.code} size="w-32">
                  Consulter le code
                </Button>

                <ButtonNeverBorder />
              </div>
            </li>
          );
        })}
      </>
    );
  } else if (APIState.data?.length === 0) {
    content = <p>Votre requête ne correspond à aucune donnée !</p>;
  }

  return (
    <div className="w-full flex justify-center pt-20 overflow-hidden border-4 border-red-500">
      <div className="relative w-4/6 h-full max-lgBIG:w-4/5 border-4 border-blue-500">
        <ul className="relative w-full h-full text-white border-4 border-amber-500">
          {content}
        </ul>
      </div>
    </div>
  );
};
