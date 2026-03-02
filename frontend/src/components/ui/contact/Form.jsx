/*********************************************/
/*** Composant Formulaire - partie contact ***/
/*********************************************/

export const Form = () => {
  return (
    <form className="w-full flex justify-center">
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
              type="text"
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
            <input
              className="w-auto placeholder:text-white-special border-2 border-transparent border-b-white outline-none sm:w-full"
              type="text"
              id="message"
              name="message"
              required="required"
              placeholder="Veuillez indiquer votre message..."
            ></input>
          </div>
        </div>

        <button className="w-37 mx-auto my-10 text-white text-xl border-2 border-white rounded-2xl p-2 cursor-pointer hover:text-fuchsia-300 hover:scale-105">
          Envoyer
        </button>
      </div>
    </form>
  );
};
