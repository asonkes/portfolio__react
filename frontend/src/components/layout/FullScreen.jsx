export const FullScreen = (props) => {
  const { className = "", children, bgImage } = props;

  return (
    //Si on mets : ${bgImage && "bg-no-repeat bg-cover bg-center" ==> bgImage peut-être falsy et alors 'undefined' mis par défaut}
    <div
      className={`max-w-full min-h-screen bg-black 
        ${bgImage ? "bg-no-repeat bg-cover bg-center" : ""}
        ${className}`}
      style={bgImage && { backgroundImage: `url(${bgImage})` }}
    >
      {/**
       * Children permet de dire s'il y a des autres composant
       * qui vont constitué le composant parent
       */}
      {children}
    </div>
  );
};
