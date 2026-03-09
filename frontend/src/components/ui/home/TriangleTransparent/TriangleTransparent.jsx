import style from "./TriangleTransparent.module.css";

export const TriangleTransparent = (prop) => {
  const { isHover, setIsHover } = prop;

  return (
    <div
      className={style.triangleTransparent}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && (
        <div className="hidden sm:flex w-full h-full justify-center items-center text-center bg-transparent z-46">
          <a
            href="/#projects"
            className="bg-black text-4xl text-white p-4 border-2 border-white uppercase tracking-wider z-46 cursor-pointer"
          >
            Views my works
          </a>
        </div>
      )}
    </div>
  );
};
