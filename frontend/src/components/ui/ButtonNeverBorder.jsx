export const ButtonNeverBorder = () => {
  return (
    <div className="flex m-5 text-base sm:text-xl text-indigo-500 cursor-pointer hover:text-fuchsia-300">
      <p className="underline underline-offset-4 decoration-2">
        En savoir plus
      </p>
      <div className="flex items-center p-1.5">
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};
