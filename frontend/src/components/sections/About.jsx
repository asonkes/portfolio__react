import { useRef, useEffect, useState } from "react";
import { FullScreen } from "../layout/FullScreen";
import { SplitScreen } from "../layout/SplitScreen";
import { Title } from "../ui/Title";
import { Text } from "../ui/Text";
import { Skill } from "../ui/Skill";
import bgAbout from "../../assets/images/background/fond-texture-peinture-marbree-liquide-peinture-fluide-texture-abstraite-fond-ecran-melange-couleurs-.webp";

export const About = () => {
  // Elément que l'on va animer
  const textRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  // Cet élément va apparaître 1fois
  // Seulement après la 1ere apparition dans le DOM de son élément
  useEffect(() => {
    if (!textRef.current) return;
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
            <Skill />
          </SplitScreen>
        </div>
      </FullScreen>
    </>
  );
};
