export const SplitScreen = (props) => {
  const { className = "", children, bgImage } = props;

  return (
    //Si on mets : ${bgImage && "bg-no-repeat bg-cover bg-center" ==> bgImage peut-être falsy et alors 'undefined' mis par défaut}
    <div
      className={`w-6/12 
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
