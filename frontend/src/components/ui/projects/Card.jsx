/*****************************************/
/*** Composant Card - partie projects  ***/
/*****************************************/

import { useState, useRef, useEffect } from "react";
import { Button } from "../shared/button/Button";
import { ButtonNeverBorder } from "../shared/button/ButtonNeverBorder";

export const Card = (props) => {
  const { element } = props;

  const [isHover, setIsHover] = useState(false);

  const [isActive, setIsActive] = useState(false);

  // Référence des éléments à observer
  const cardRef = useRef(null);

  // Etat qui va rendre les éléments visibles ou pas pour l'animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <li
      ref={cardRef}
      className="relative w-full z-40 mb-25 lg:-mb-35 odd:self-start even:self-end odd:ml-0 even:mr-0 lg:w-3/6 lg:odd:-ml-10 lg:even:-mr-10"
    >
      <div
        className={`relative w-full z-40 border border-white rounded-2xl transition-all duration-3500 ${isVisible ? "opacity-100 [li:nth-child(odd)_&]:left-0 [li:nth-child(even)_&]:right-0" : "opacity-0 [li:nth-child(odd)_&]:left-[-150%] [li:nth-child(even)_&]:right-[-150%]"}`}
      >
        <h3 className="text-center text-xl my-3 sm:text-2xl">
          <span className="text-fuchsia-300">{element.type}</span>
          <span className="text-indigo-400"> ({element.formation}) </span>
        </h3>
        <p
          className="absolute w-32 -top-14 text-center text-base text-white p-2 rounded-2xl sm:text-lg lg:[li:nth-child(odd)_&]:right-0 lg:[li:nth-child(even)_&]:left-0"
          style={{ background: "var(--color-mix-special)" }}
        >
          {element.date}
        </p>
        <p className="text-center text-base text-white my-3 sm:text-xl">
          {element.title}
        </p>

        <div
          className="relative w-full h-60 flex items-center"
          onMouseEnter={() => setIsHover(element.id)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/** Image par défaut */}
          <img
            className={`absolute w-full h-60 inset-0 object-cover transition-all duration-300 ease-out ${isHover === element.id ? "opacity-0" : "opacity-100"}`}
            src={element.img}
            alt={element.title}
          />

          {/** Image en Hover */}
          <div
            className={`relative w-full h-60 flex justify-center items-center transition-all duration-750 ease-in ${isHover === element.id ? "opacity-100" : "opacity-0"}`}
          >
            <img
              className="absolute w-full h-60 inset-0 object-cover"
              src="/images/background/flux-conception-code-binaire_53876-97406.webp"
              alt="icone représentant le cycle du web"
            />
            <div className="absolute flex-col justify-center items-center">
              <p className="my-2 text-lg tracking-wider">{element.code}</p>
              <a
                className="w-full flex justify-center"
                href={element.site}
                target="_blank"
              >
                <img
                  className="h-7.5 hover:scale-110"
                  src="/images/icons/Globe-256.png"
                  alt="icone représentant le cycle du web"
                />
              </a>
            </div>
          </div>
        </div>

        {element.site && (
          <Button href={element.site} size="w-20 sm:w-26" target="_blank">
            Visiter le site
          </Button>
        )}
        {element.maquette && (
          <Button href={element.maquette} size="w-30 sm:w-40" target="_blank">
            Explorer la maquette
          </Button>
        )}
        {element.code && (
          <Button href={element.git} size="w-26 sm:w-32" target="_blank">
            Consulter le code
          </Button>
        )}

        <ButtonNeverBorder onClick={() => setIsActive((prev) => !prev)} />

        {isActive && (
          <div className="text-lg m-5 text-white tracking-wide">
            {element.description.split(". ").map((sentence, idx) => (
              <p className="block mb-4" key={idx}>
                {sentence.trim()}.
                <br />
              </p>
            ))}
          </div>
        )}
      </div>

      <div
        className={`circle absolute w-6 h-6 -top-12 -left-10 flex justify-center items-center bg-fuchsia-500 rounded-2xl sm:-left-15 sm:w-8 sm:h-8 lg:left-auto lg:[li:nth-child(odd)_&]:-right-14 lg:[li:nth-child(even)_&]:-left-14
              after:absolute after:content-[''] after:h-3 after:sm:h-5 after:w-3 after:sm:w-5 after:bg-indigo-500 after:rounded-2xl after:transform after:translate-x-[-12.5] after:translate-y-[-12.5] transition-opacity duration-3000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      ></div>
    </li>
  );
};
