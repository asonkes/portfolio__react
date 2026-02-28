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
            <li
              key={element.id}
              className="relative z-40 w-full lg:w-3/6 mb-25 lg:-mb-35 odd:self-start odd:ml-0 lg:odd:-ml-10 even:self-end even:-mr-0"
            >
              <div className="relative z-40 w-full border border-white rounded-2xl">
                <h3 className="text-center text-xl sm:text-2xl my-3">
                  <span className="text-fuchsia-300">{element.type}</span>
                  <span className="text-indigo-400">
                    {" "}
                    ( {element.formation} ){" "}
                  </span>
                </h3>
                <p
                  className="absolute w-32 -top-14 text-center text-base sm:text-lg text-white p-2 rounded-2xl lg:[li:nth-child(odd)_&]:right-0 lg:[li:nth-child(even)_&]:left-0"
                  style={{ background: "var(--color-mix-special)" }}
                >
                  {element.date}
                </p>
                <p className="text-center text-base sm:text-xl text-white my-3">
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

                <Button href={element.site} size="w-20 sm:w-26">
                  Visiter le site
                </Button>
                <Button href={element.maquette} size="w-30 sm:w-40">
                  Explorer la maquette
                </Button>
                <Button href={element.code} size="w-26 sm:w-32">
                  Consulter le code
                </Button>

                <ButtonNeverBorder />
              </div>

              <div
                className="circle absolute w-6 h-6 -top-12 -left-10 flex justify-center items-center bg-fuchsia-500 rounded-2xl sm:-left-15 sm:w-8 sm:h-8 lg:left-auto lg:[li:nth-child(odd)_&]:-right-14 lg:[li:nth-child(even)_&]:-left-14
              after:absolute after:content-[''] after:h-3 after:sm:h-5 after:w-3 after:sm:w-5 after:bg-indigo-500 after:rounded-2xl after:transform after:translate-x-[-12.5] after:translate-y-[-12.5]"
              ></div>
            </li>
          );
        })}
      </>
    );
  } else if (APIState.data?.length === 0) {
    content = <p>Votre requête ne correspond à aucune donnée !</p>;
  }

  return (
    <div className="w-full md:w-9/12 m-auto flex justify-center pt-35 pb-0 lg:pb-50 overflow-hidden border-4 border-red-500">
      <div
        className="line relative w-3/4 sm:w-4/6 h-full after:absolute after:content-[''] after:h-[98%] lg:after:h-[106%] after:w-0.5 after:-top-6 after:lg:-top-3 after:-left-6 sm:after:-left-10 lg:after:left-1/2 after:-translate-x-1/2 after:bg-linear-to-r
          after:from-[rgb(106,6,236)] after:to-[rgb(220,0,240)] border-4 border-blue-500"
      >
        <ul className="relative w-full h-full flex flex-col text-white border-4 border-amber-500">
          {content}
        </ul>
      </div>
    </div>
  );
};
