export const AnimationText = () => {
  return (
    <div className="absolute h-fit right-[50%] bottom-20 translate-[50%] text-6xl tracking-wider border-4 border-red-500">
      <span className="text-fuchsia-300">I'm a</span>
      <span className="text-indigo-500" id="dynamic-text"></span>
    </div>
  );
};
