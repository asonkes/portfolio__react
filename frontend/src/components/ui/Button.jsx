/************************/
/*** Composant Bouton  ***/
/************************/

export const Button = (props) => {
  const { href, children, size } = props;

  return (
    <div className="flex text-xl text-indigo-500 m-5">
      <a
        className={`${size} relative inline-block bg-black rounded-2xl text-center z-10 text-fuchsia-200 hover:scale-110
            after:content-[''] 
            after:absolute 
            after:-inset-0.5 
            after:-z-10 
            after:rounded-2xl 
            after:bg-linear-to-r
          after:from-[rgb(106,6,236)]
          after:to-[rgb(220,0,240)]
            after:mix-blend-overlay
            `}
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </div>
  );
};
