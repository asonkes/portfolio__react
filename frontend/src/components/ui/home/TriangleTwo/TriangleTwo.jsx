/*************************************************************************/
/*** Composant Triangle - affiche l'image de la personne - partie Home ***/
/*************************************************************************/

import style from "./TriangleTwo.module.css";

export const TriangleTwo = () => {
  return (
    <div className={style.triangleTwo}>
      <img
        className={style.image}
        src="/src/assets/images/images/Polygon-1.webp"
        alt="Image le personne qui a créé le portfolio"
      />
    </div>
  );
};
