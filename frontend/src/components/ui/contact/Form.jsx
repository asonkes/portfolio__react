/*********************************************/
/*** Composant Formulaire - partie contact ***/
/*********************************************/

import { useState } from "react";

export const Form = () => {
  const [APIState, setAPIState] = useState({
    error: false,
    success: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(new FormData(event.target));

    // Récupération des données du formulaire
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch("http://localhost:3100/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
      })
      .then(() => {
        setAPIState({ error: false, success: true });
        // On vide le formulaire
        event.target.reset();
      })
      .catch(() => {
        setAPIState({ error: true, success: false });
      });
  };

  return (
    <form className="w-full flex justify-center" onSubmit={handleSubmit}>
      <div className="w-full sm:w-5/6 flex flex-col">
        <div className="w-fit m-auto my-3 flex">
          <div className="w-32 text-white text-xl">
            <label htmlFor="firstname">Nom</label>
          </div>
          <div className="w-full text-lg text-fuchsia-400">
            <input
              className="w-auto placeholder:text-white-special border-2 border-b-white border-transparent outline-none sm:w-full"
              type="text"
              id="firstname"
              name="firstname"
              required="required"
              placeholder="Veuillez indiquer votre nom..."
            ></input>
          </div>
        </div>

        <div className="w-fit m-auto my-3 flex">
          <div className="w-32 text-white text-xl">
            <label htmlFor="lastname">Prénom</label>
          </div>
          <div className="w-full text-lg text-fuchsia-400">
            <input
              className="w-auto placeholder:text-white-special border-2 border-transparent border-b-white outline-none sm:w-full"
              type="text"
              id="lastname"
              name="lastname"
              required="required"
              placeholder="Veuillez indiquer votre prénom..."
            ></input>
          </div>
        </div>

        <div className="w-fit m-auto my-3 flex">
          <div className="w-32 text-white text-xl">
            <label htmlFor="email">Email</label>
          </div>
          <div className="w-full text-lg text-fuchsia-400">
            <input
              className="w-auto placeholder:text-white-special border-2 border-transparent border-b-white outline-none sm:w-full"
              type="email"
              id="email"
              name="email"
              required="required"
              placeholder="Veuillez indiquer votre email..."
            ></input>
          </div>
        </div>

        <div className="w-fit m-auto my-3 flex">
          <div className="w-32 text-white text-xl">
            <label htmlFor="message">Message</label>
          </div>
          <div className="w-full text-lg text-fuchsia-400">
            <textarea
              className="w-auto placeholder:text-white-special border-2 border-transparent border-b-white outline-none resize-none sm:w-full"
              name="message"
              id="message"
              required="required"
              placeholder="Veuillez indiquer votre message..."
            ></textarea>
          </div>
        </div>

        <button className="w-37 mx-auto my-10 text-white text-xl border-2 border-white rounded-2xl p-2 cursor-pointer hover:text-fuchsia-300 hover:scale-105">
          Envoyer
        </button>
        {APIState.success && <p className="text-green-400">Message envoyé !</p>}
        {APIState.error && (
          <p className="text-red-400">Erreur lors de l'envoi...</p>
        )}
      </div>
    </form>
  );
};
