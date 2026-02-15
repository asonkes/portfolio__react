export const FullScreen = (props) => {
  const { className = "", children, bgImage } = props;

  return (
    <div
      className={`max-w-full bg-black ${className}`}
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
