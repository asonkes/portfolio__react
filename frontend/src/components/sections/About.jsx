/********************************/
/*** Composant session About  ***/
/********************************/

import { useRef, useEffect, useState } from "react";
import { FullScreen } from "../layout/FullScreen";
import { SplitScreen } from "../layout/SplitScreen";
import { Skill } from "../ui/about/Skill";
import { Title } from "../ui/shared/Title";
import { Text } from "../ui/shared/Text";
import bgAbout from "../../assets/images/background/fond-texture-peinture-marbree-liquide-peinture-fluide-texture-abstraite-fond-ecran-melange-couleurs-.webp";

export const About = () => {
  // Référence de l'élément que l'on va animer
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Appel à l'API
  const [APIState, setAPIState] = useState({
    error: false,
    data: undefined,
  });

  useEffect(() => {
    {
      /** en dev :  http://localhost:3000/skills */
    }
    fetch("/db.json")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        {
          /** en dev :  setAPIState({ error: false, data }) */
        }
        setAPIState({ error: false, data: data.skills });
      })
      .catch(() => {
        setAPIState({ error: true, data: undefined });
      });
  }, []);

  // Contenu que l'on veut retourner
  let content;
  if (APIState.error)
    content = <p className="text-white">Une erreur est survenue</p>;
  if (APIState.data?.length > 0) {
    content = (
      <>
        {APIState.data.map((element) => {
          return <Skill key={element.id} element={element} />;
        })}
      </>
    );
  }
  if (APIState.data?.length === 0) {
    content = (
      <p className="text-white">
        Votre requête ne correspond à aucune donnée !
      </p>
    );
  }

  useEffect(() => {
    if (!textRef.current) return;

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
      <FullScreen className="flex flex-col min-h-screen" bgImage={bgAbout}>
        <Title title="About" />
        <div className="w-full max-w-7xl flex flex-1 flex-col mx-auto items-center justify-center lg:flex-row">
          <SplitScreen className="flex justify-center items-center">
            <Text
              className={`text-center tracking-wider p-5 -translate-x-full opacity-0 transition-all duration-2500 ease-out
                ${isVisible ? "translate-x-0 opacity-100" : ""}`}
              ref={textRef}
            >
              <span className="text-indigo-500 text-4xl">" </span>
              <span className="text-fuchsia-300 text-xl lg:text-2xl italic">
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
            <Text className="text-white text-center text-3xl tracking-wider p-12">
              Mes compétences
            </Text>

            <ul className="w-8/12 m-auto md:w-5/12 lg:w-full flex justify-center items-center flex-wrap gap-5">
              {content}
            </ul>
          </SplitScreen>
        </div>
      </FullScreen>
    </>
  );
};
