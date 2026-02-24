/************************/
/*** Composant Texte  ***/
/************************/

import { forwardRef } from "react";

// Pk 'forwardRef' ????
// Ici 'Text' est un composant donc il faut pouvoir attacher la 'ref' au 'p'
export const Text = forwardRef((props, ref) => {
  const { children, className = "" } = props;
  return (
    <p ref={ref} className={`${className}`}>
      {children}
    </p>
  );
});
