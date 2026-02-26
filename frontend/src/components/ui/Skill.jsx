import { useEffect, useState } from "react";

export const Skill = () => {        
    // Appel à l'API
    const [APIState, setAPIState] = useState({
    error: false,
    data: undefined
    });

    // On appelle les data
    // video : 11min56
    useEffect(() => {
    fetch("http://localhost:3000/skills")
        .then((res) => {
        return res.json();
        })
        .then((data) => {
        setAPIState({ error: false, data });
        })
        .catch(() => {
        setAPIState({ error: true, data: undefined });
        });
    }, []);

    // Contenu que l'on veut retourner
    let content;
    if (APIState.error) content = <p>Une erreur est survenue...</p>;
    else if (APIState.data?.length > 0) {
    content = (
        <>
        {APIState.data.map((element) => {
            return (
            <li
                key={element.id}
                className="w-18 h-18 lg:w-20 lg:h-20 flex justify-center items-center rounded-xl"
                style={{ background: "var(--color-mix-special)" }}
            >
                <img
                src={element.img}
                alt={element.title}
                className="w-12 h-12 lg:w-14 lg:h-14 p-1 bg-white-special rounded-md"
                />
            </li>
            );
        })}
        </>
    );
    } else if (APIState.data?.length === 0) {
    content = <p>Votre requête ne correspond à aucune donnée !</p>;
    }

    return (
        <ul className="grid grid-cols-3 sm:grid-cols-4 gap-6 lg:gap-8 p-4 justify-center max-w-max mx-auto border-4 border-amber-500">
            {content}
        </ul>
    );
}
