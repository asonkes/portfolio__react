/**********************************************/
/*** Composant Animation Text - partie Home ***/
/**********************************************/

import { useEffect, useState, useMemo } from "react";

export const AnimationText = () => {
  const texts = useMemo(
    () => ["Web Developer", "Passionate", "Motivated Junior", "Web Developer"],
    [],
  );

  // Index du mot courant
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // Index de la lettre courante
  const [charIndex, setCharIndex] = useState(0);
  // Phase de suppression du mot
  const [isDeleting, setIsDeleting] = useState(false);
  // Fin de l'animation
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // On arrête l'animation, une fois que tous les mots sont apparus
    if (isFinished) return;

    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Si index de la lettre < la longueur du mot ==> on ajoute une lettre de +
          if (charIndex < currentText.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            // si on est sur le dernier mot, on arrête
            if (currentTextIndex === texts.length - 1) {
              setIsFinished(true);
            } else {
              // Phase de suppression du mot
              setIsDeleting(true);
            }
          }
          //Phase suppression
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
            setTimeout(isDeleting, 100);
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? 70 : 200,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, currentTextIndex, isDeleting, isFinished, texts]);

  return (
    <div className="absolute w-full h-fit right-[50%] flex flex-col bottom-62 translate-[50%] text-5xl text-center tracking-wider sm:text-6xl sm:bottom-37 lg:w-auto lg:flex-row lg:bottom-20">
      <span className="text-fuchsia-400">I'm a </span>
      <span className="relative ml:4 text-indigo-500 after:content-[''] after:absolute after:top-0 after:-right-1 after:bg-indigo-500 after:h-full after:w-1 after:animate-[cursor_1s_infinite]">
        {texts[currentTextIndex].substring(0, charIndex)}
      </span>
    </div>
  );
};
