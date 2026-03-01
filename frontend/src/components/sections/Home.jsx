import { SplitScreen } from "../layout/SplitScreen";
import bgHome from "../../assets/images/background/splash-gouttes-eau_23-21478283951.webp";
import { Triangle } from "../ui/Triangle/Triangle";
import { TriangleTwo } from "../ui/TriangleTwo/TriangleTwo";
import { AnimationText } from "../ui/AnimationText";

export const Home = () => {
  return (
    <div className="flex pt-16">
      <SplitScreen className="min-h-[calc(100vh-64px)] bg-black border-4 border-red-400" />
      <SplitScreen
        className="min-h-[calc(100vh-64px)] opacity-15"
        bgImage={bgHome}
      />
      <Triangle />
      <TriangleTwo />
      <AnimationText />
    </div>
  );
};
