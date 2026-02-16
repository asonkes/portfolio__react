import { FullScreen } from "../layout/FullScreen";
import { SplitScreen } from "../layout/SplitScreen";
import { Title } from "../ui/Title";
import { Text } from "../ui/Text";
import bgAbout from "../../assets/images/background/fond-texture-peinture-marbree-liquide-peinture-fluide-texture-abstraite-fond-ecran-melange-couleurs-.webp";

export const About = () => {
  return (
    <>
      <FullScreen
        className="flex flex-col min-h-screen border-4 border-orange-400"
        bgImage={bgAbout}
      >
        <Title title="About" />
        <div className="w-full max-w-7xl flex flex-1 flex-col mx-auto items-center justify-center lg:flex-row border-4 border-red-400">
          <SplitScreen className="flex justify-center items-center border-4 border-yellow-400">
            <Text className="text-center tracking-wider p-5">
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
          <SplitScreen className="border-4 border-b-blue-400">
            <Text className="text-white text-center tracking-wider p-5">
              Mes compétences
            </Text>
          </SplitScreen>
        </div>
      </FullScreen>
    </>
  );
};
