/***********************************/
/*** Composant session Contact  ****/
/***********************************/

import { useEffect, useState } from "react";
import { FullScreen } from "../layout/FullScreen";
import { SplitScreen } from "../layout/SplitScreen";
import { Form } from "../ui/contact/Form";
import { Text } from "../ui/shared/Text";
import { Title } from "../ui/shared/Title";

// Ici pas un composant (import d'une image) => donc pas d'accolade
import imgOrdi from "../../assets/images/images/ordi-transparent-1.webp";
import imgOrdiColor from "../../assets/images/images/ordi-color.webp";

export const Contact = () => {
  const [isHover, setIsHover] = useState(false);

  const [APIState, setAPIState] = useState({
    error: false,
    data: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/messages")
      .then((res) => {
        if (!res.ok) throw new Error();
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

  if (APIState.error) {
    content = <p className="text-white">Une erreur est survenue...</p>;
  }
  if (APIState.data?.length > 0) {
    content = (
      <div className="flex flex-col gap-4">
        {APIState.data.map((element) => (
          <div
            key={element._id}
            className="text-fuchsia-400 border-b border-white p-2"
          >
            <p>
              <strong>
                {element.firstname} {element.lastname}
              </strong>{" "}
              ({element.email})
            </p>
            <p>{element.text}</p>
          </div>
        ))}
      </div>
    );
  }
  if (APIState.data?.length === 0) {
    content = (
      <p className="text-white">
        Votre message n'a pas été envoyé, veuillez réessayer plus tard...
      </p>
    );
  }

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
                className={`w-full sm:w-9/12 xl:w-full 2xl:w-10/12 m-auto transition-opacity duration-1000 ease-in-out ${
                  isHover ? "opacity-0" : "opacity-100"
                }`}
              />
              {/** On met l'action 'transition-opacity duration-1000 ease-in-out' par défaut sur les 2
               * car elle doit avoir lieu avant que l'opacity soit gérée
               */}
              <img
                src={imgOrdiColor}
                className={`w-full sm:w-9/12 xl:w-full 2xl:w-10/12 m-auto absolute inset-0 transition-opacity duration-1000 ease-in-out ${
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

            {content}
          </SplitScreen>
        </div>
      </FullScreen>
    </>
  );
};
