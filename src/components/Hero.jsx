import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        {/* since diff pages will have diff images -> make source dynamic */}
        <div className="hero-title">
          <h1>{props.title}</h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
