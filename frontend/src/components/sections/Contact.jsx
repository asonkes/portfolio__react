import { useState } from "react";
import { FullScreen } from "../layout/FullScreen";
import { SplitScreen } from "../layout/SplitScreen";
import { Title } from "../ui/Title";
import { Text } from "../ui/Text";

// Ici pas un composant (import d'une image) => donc pas d'accolade
import imgOrdi from "../../assets/images/images/ordi-transparent-1.webp";
import imgOrdiColor from "../../assets/images/images/ordi-color.webp";

export const Contact = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <FullScreen className="h-screen flex flex-col border-4 border-yellow-400">
        <Title title="Contact" />

        <div className="w-full max-w-7xl flex flex-1 flex-col mx-auto items-center justify-center lg:flex-row border-4 border-red-400">
          <SplitScreen className="flex justify-center items-center border-4 border-yellow-400">
            {/** Alors ici, malgré qu'il y ai pas de paramètre, il FAUT une fonction flêchée, pk?
                Car React attend une exécution de fonction dans le TEMPS
                Qui se déroulera APRES, qd l'utilisateur aura inétragit...
            */}
            <img
              src={isHover ? imgOrdiColor : imgOrdi}
              alt="Image représentant un ordinateur"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            />
          </SplitScreen>
          <SplitScreen>
            <Text className="border-4 text-fuchsia-300 text-center text-3xl tracking-wider p-5">
              Me contacter
            </Text>
          </SplitScreen>
        </div>
      </FullScreen>
    </>
  );
};
