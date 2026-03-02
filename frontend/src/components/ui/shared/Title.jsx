export const Title = (props) => {
  const { title } = props;
  return (
    <h2 className="text-white text-5xl text-center tracking-wider pt-16">
      {title}
    </h2>
  );
};
