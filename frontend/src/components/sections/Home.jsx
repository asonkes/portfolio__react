import { SplitScreen } from "../layout/SplitScreen";
import bgHome from "../../assets/images/background/splash-gouttes-eau_23-21478283951.webp";
import { Triangle } from "../ui/Triangle/Triangle";
import { TriangleTwo } from "../ui/TriangleTwo/TriangleTwo";

export const Home = () => {
  return (
    <div className="flex pt-16 relative">
      <SplitScreen className="min-h-[calc(100vh-64px)] bg-black border-4 border-red-400" />
      <SplitScreen
        className="relative min-h-[calc(100vh-64px)] border-4 border-yellow-400 opacity-15"
        bgImage={bgHome}
      />
      <Triangle />
      <TriangleTwo />
    </div>
  );
};
