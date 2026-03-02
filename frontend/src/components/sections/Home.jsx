/*******************************/
/*** Composant session Home  ***/
/*******************************/

import { SplitScreen } from "../layout/SplitScreen";
import bgHome from "../../assets/images/background/splash-gouttes-eau_23-21478283951.webp";
import { Triangle } from "../ui/home/Triangle/Triangle";
import { TriangleTwo } from "../ui/home/TriangleTwo/TriangleTwo";
import { TriangleTransparent } from "../ui/home/TriangleTransparent/TriangleTransparent";
import { AnimationText } from "../ui/home/AnimationText";

export const Home = () => {
  return (
    <div className="flex pt-16">
      <SplitScreen className="min-h-[calc(100vh-64px)] bg-black" />
      <SplitScreen
        className="min-h-[calc(100vh-64px)] opacity-15"
        bgImage={bgHome}
      />
      <TriangleTransparent />
      <Triangle />
      <TriangleTwo />
      <AnimationText />
    </div>
  );
};
