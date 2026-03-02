import { useEffect, useRef } from "react";

export const AnimationText = () => {

  // A voir ce soir ==> je pense qu'il faut faire un useEffect
  /***
   * Raisonnement :
   * ==> 3) Comme ça on peut mettre (si la référence n'existe pas => return)
   * ==> 4) On laisse les 2 fonctions
   * ==> 5) Regarder pour faire un setInterval... UDemy
  */

  // Référence sur l'élément qui va être animé
  const animationRef = useRef(null);

  useEffect(() => {

    if(!animationRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        // Est-ce que je dois mettre un UseState(à voir)
        observer.unobserve(animationRef.current);
      }
    }, []);
    
    observer.observe(animationRef.current);

    observer.disconnect();
  })

  //   const texts = ["Web Developer", "Passionate", "Motivated Junior", "Web Developper"];
  //   let currentTextIndex = 0; // Index du mot
  //   let charIndex = 0; // Index de la lettre dans le mot

  //   function typewriter() {
  //       if (dynamicText) {
  //           // Affiche chaque lettre du mot actuel
  //           if (charIndex < texts[currentTextIndex].length) {
  //               dynamicText.innerHTML += `<span>${texts[currentTextIndex][charIndex]}</span>`;
  //               charIndex++;
  //               setTimeout(typewriter, 200); // Vitesse d'affichage des lettres
  //           } else {
  //               // Si on n'a pas encore atteint le dernier mot, effacer le texte après une pause
  //               if (currentTextIndex < texts.length - 1) {
  //                   setTimeout(deleteText, 1000); // Temps d'attente après avoir fini le mot
  //               }
  //           }
  //       }
  //   }

  //   function deleteText() {
  //       if (charIndex > 0) {
  //           // Efface la dernière lettre une par une
  //           dynamicText.innerHTML = texts[currentTextIndex].substring(0, charIndex - 1);
  //           charIndex--;
  //           setTimeout(deleteText, 100); // Vitesse d'effacement des lettres
  //       } else {
  //           // Passe au mot suivant
  //           currentTextIndex++;
            
  //           // Passe au mot suivant après une petite pause
  //           setTimeout(typewriter, 500);
  //       }
  //   }

  // // Lancer l'animation après un court délai
  // setTimeout(typewriter, 500);

  return (
    <div className="absolute h-fit right-[50%] bottom-20 translate-[50%] text-6xl tracking-wider border-4 border-red-500">
      <span className="text-fuchsia-300">I'm a</span>
      <span 
        ref={animationRef}
        className="text-indigo-500" id="dynamic-text"
      ></span>
    </div>
  );
};
