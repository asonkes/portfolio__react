/*******************************/
/*** Composant session Home  ***/
/*******************************/
import Style from "../ui/home/TriangleTransparent/TriangleTransparent.module.css";
import { SplitScreen } from "../layout/SplitScreen";
import bgHome from "../../assets/images/background/splash-gouttes-eau_23-21478283951.webp";
import { Triangle } from "../ui/home/Triangle/Triangle";
import { TriangleTwo } from "../ui/home/TriangleTwo/TriangleTwo";
import { TriangleTransparent } from "../ui/home/TriangleTransparent/TriangleTransparent";
import { AnimationText } from "../ui/home/AnimationText";
import { useState } from "react";

export const Home = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`flex pt-16 ${Style.snip1573} ${isHover ? Style.hover : ""}`}
    >
      <SplitScreen className="min-h-[calc(100vh-64px)] bg-black" />
      <SplitScreen
        className="min-h-[calc(100vh-64px)] opacity-15"
        bgImage={bgHome}
      />
      <TriangleTransparent isHover={isHover} setIsHover={setIsHover} />
      <Triangle />
      <TriangleTwo />
      <AnimationText />
    </div>
  );
};
