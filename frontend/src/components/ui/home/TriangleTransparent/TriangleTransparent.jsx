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
        <div className="w-full h-full flex justify-center items-center text-center bg-transparent z-46">
          {isHover && (
            <a
              href="/#projects"
              className="bg-black text-4xl text-white p-4 border-2 border-white uppercase tracking-wider z-46 cursor-pointer"
            >
              Views my works
            </a>
          )}
        </div>
      )}
    </div>
  );
};
