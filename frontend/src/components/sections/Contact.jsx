/***********************************/
/*** Composant session Contact  ****/
/***********************************/

import { useState } from "react";
import { FullScreen } from "../layout/FullScreen";
import { SplitScreen } from "../layout/SplitScreen";
import { Form } from "../ui/contact/Form";
import { Text } from "../ui/shared/Text";
import { Title } from "../ui/shared/Title";

// Ici pas un composant (import d'une image) => donc pas d'accolade
import imgOrdi from "../../../public/images/images/ordi-transparent-1.webp";
import imgOrdiColor from "../../../public/images/images/ordi-color.webp";

export const Contact = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <FullScreen className="min-h-screen flex flex-col lg:min-screen">
        <Title title="Contact" />

        <div className="w-11/12 xl:w-9/12 flex flex-1 flex-col mx-auto items-center justify-center lg:flex-row">
          <SplitScreen className="flex justify-center items-center">
            {/** Alors ici, malgré qu'il y ai pas de paramètre, il FAUT une fonction flêchée, pk?
                Car React attend une exécution de fonction dans le TEMPS
                Qui se déroulera APRES, qd l'utilisateur aura intéragit...
            */}

            <div
              className="relative"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {/** On met l'action 'transition-opacity duration-1000 ease-in-out' par défaut sur les 2
               * car elle doit avoir lieu avant que l'opacity soit gérée
               */}
              <img
                src={imgOrdi}
                alt="Image d'un ordinateur avec juste les contours"
                width={493}
                height={369}
                className={`w-full h-auto sm:w-9/12 xl:w-full 2xl:w-10/12 m-auto transition-opacity duration-1000 ease-in-out ${
                  isHover ? "opacity-0" : "opacity-100"
                }`}
              />
              {/** On met l'action 'transition-opacity duration-1000 ease-in-out' par défaut sur les 2
               * car elle doit avoir lieu avant que l'opacity soit gérée
               */}
              <img
                src={imgOrdiColor}
                alt="Image d'un ordinateur coloré"
                className={`w-full h-auto sm:w-9/12 xl:w-full 2xl:w-10/12 m-auto absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isHover ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </SplitScreen>
          <SplitScreen>
            <Text className="text-fuchsia-400 text-center text-3xl tracking-wider pt-20 pb-6">
              Me contacter
            </Text>
            <Form />
          </SplitScreen>
        </div>
      </FullScreen>
    </>
  );
};
