import "./backgroundtriangle.css";

const PokemonPageBackgroundTriangle = ({ types }) => {
  const type = "poison"; // get pokemon types here

  return (
    <>
      <div className={`triangle-left background-color-${type}`}></div>
      <div className="triangle-right background-color-fire"></div>
    </>
  );
};

export default PokemonPageBackgroundTriangle;
