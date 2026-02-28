import { FullScreen } from "../layout/FullScreen";
import { Title } from "../ui/Title";
import { Card } from "../ui/Card";

export const Projects = () => {
  return (
    <>
      <FullScreen className="border-4 border-red-400">
        <Title title="Projects" />
        <Card />
      </FullScreen>
    </>
  );
};
