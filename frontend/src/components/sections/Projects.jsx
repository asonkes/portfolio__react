/***********************************/
/*** Composant session Projects  ***/
/***********************************/

import { useEffect, useState } from "react";
import { FullScreen } from "../layout/FullScreen";
import { Card } from "../ui/projects/Card";
import { Title } from "../ui/shared/Title";

export const Projects = () => {
  const [APIState, setAPIState] = useState({
    error: false,
    data: undefined,
  });

  useEffect(() => {
    {
      /** en dev :  http://localhost:3000/projects */
    }
    fetch("/prod.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur mauvaise ressource");
        return res.json();
      })
      .then((data) => {
        {
          /** en dev :  setAPIState({ error: false, data }) */
        }
        setAPIState({ error: false, data: data.projects });
      })
      .catch(() => {
        setAPIState({ error: true, data: undefined });
      });
  }, []);

  let content;
  if (APIState.error)
    content = <p className="text-white">Une erreur est survenue...</p>;
  if (APIState.data?.length > 0) {
    content = (
      <>
        {APIState.data.map((element) => {
          return <Card key={element.id} element={element} />;
        })}
      </>
    );
  }
  if (APIState.data?.length === 0) {
    content = (
      <p className="text-white">
        Votre requête ne correspond à aucune donnée !
      </p>
    );
  }

  return (
    <>
      <FullScreen>
        <Title title="Projects" />

        <div className="w-full md:w-9/12 m-auto flex justify-center pt-35 pb-0 lg:pb-50 overflow-hidden">
          <div
            className="line relative w-3/4 sm:w-4/6 h-full after:absolute after:content-[''] after:h-[98%] lg:after:h-[106%] after:w-0.5 after:-top-6 after:lg:-top-4 after:-left-6 sm:after:-left-10 lg:after:left-1/2 after:-translate-x-1/2 after:bg-linear-to-r
          after:from-[rgb(106,6,236)] after:to-[rgb(220,0,240)]"
          >
            <ul className="relative w-full h-full flex flex-col text-white">
              {content}
            </ul>
          </div>
        </div>
      </FullScreen>
    </>
  );
};
