import { useRef, useEffect, useState } from "react";
import { FullScreen } from "../layout/FullScreen";
import { SplitScreen } from "../layout/SplitScreen";
import { Title } from "../ui/Title";
import { Text } from "../ui/Text";
import bgAbout from "../../assets/images/background/fond-texture-peinture-marbree-liquide-peinture-fluide-texture-abstraite-fond-ecran-melange-couleurs-.webp";

export const About = () => {
  // Elément que l'on va animer
  const textRef = useRef(null);

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
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAPIState({ error: false, data });
      })
      .catch((error) => {
        console.log(error);
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
              className="w-20 h-20 flex justify-center items-center rounded-xl"
              style={{ background: "var(--color-mix-special)" }}
            >
              <img
                src={element.img}
                alt={element.title}
                className="w-14 h-14 p-1 bg-white-special object-contain rounded-md"
              />
            </li>
          );
        })}
      </>
    );
  } else if (APIState.data?.length === 0) {
    content = <p>Votre requête ne correspond à aucune donnée !</p>;
  }

  const [isVisible, setIsVisible] = useState(false);

  // Cet élément va apparaître 1fois
  // Seulement après la 1ere apparition dans le DOM de son élément
  useEffect(() => {
    // On met 'text.current' ==> car = à un objet
    // On transforme l'objet en élément du DOM (ici la balise 'p' du composant 'Text')
    // if (!textRef.current) return;

    // Quand on créé un 'observer' => on reçoit en retour un tableau(entries)
    // entries[0] ==> veut dire ==> 'utilisateur n'est pas encore passé sur l'élément'
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(textRef.current);
      }
    });

    // On va observer la référence de notre élément
    observer.observe(textRef.current);

    // C'est une 'cleanUp' ==> une fois que t'es passé, tu écoutes plus le 'useEffect' car finit !!!
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <FullScreen
        className="flex flex-col min-h-screen border-4 border-orange-400"
        bgImage={bgAbout}
      >
        <Title title="About" />
        <div className="w-full max-w-7xl flex flex-1 flex-col mx-auto items-center justify-center lg:flex-row border-4 border-red-400">
          <SplitScreen className="flex justify-center items-center border-4 border-yellow-400">
            <Text
              className={`text-center tracking-wider p-5 -translate-x-full opacity-0 transition-all duration-2500 ease-out
                ${isVisible ? "translate-x-0 opacity-100" : ""}`}
              ref={textRef}
            >
              <span className="text-indigo-500 text-4xl">" </span>
              <span className="text-fuchsia-300 text-2xl italic">
                En pleine reconversion professionnelle, <br></br>
                Je me suis lancée dans l'informatique après <br></br>
                une quinzaine d'années en tant que fleuriste. <br></br>
                Une prise de risque ??? OUI !!! <br></br>
                Je n'avais pas beaucoup de connaissances dans le <br></br>
                domaine, <br></br>
                et le pari a été gagnant !!! <br></br>
                Me voilà avec mon diplôme <br></br>
                et une distinction dans la poche après 2 ans... <br></br>
                Il fallait juste y croire et s'accrocher !!!
              </span>
              <span className="text-indigo-500 text-4xl"> "</span>
            </Text>
          </SplitScreen>
          <SplitScreen>
            <Text className="border-4 text-white text-center text-3xl tracking-wider p-5">
              Mes compétences
            </Text>
            <ul className="grid grid-flow-col auto-cols-max grid-rows-4 gap-4 p-5 justify-center">
              {content}
            </ul>
          </SplitScreen>
        </div>
      </FullScreen>
    </>
  );
};
