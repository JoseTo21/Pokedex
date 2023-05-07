import "./stylespages/pokeinfoerr.css";

const PokeInfoErr = () => {
  return (
    <section className="container__err">
      <div className="poke_err">
        <img className="pikachu__err" src="public\pngwing.com.png" />
        <h1>Sorry, this pokemon doesn't exit</h1>
        <h3>Please, go back to find a new Pokemon!</h3>
      </div>
    </section>
  );
};

export default PokeInfoErr;
