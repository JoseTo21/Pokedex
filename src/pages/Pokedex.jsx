import { useSelector } from "react-redux";
import FormPoke from "../components/pokedex/FormPoke";
import PokeContainer from "../components/pokedex/PokeContainer";
import { useState } from "react";
import "./stylespages/pokedex.css";

const Pokedex = () => {
  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=13000&offset=0";

  const [formUrl, setFormUrl] = useState(urlBase);

  const { trainerName } = useSelector((state) => state);

  return (
    <div>
      <nav>
        <img className="header__principal" src="banner-pokedex.png" />
      </nav>
      <div className="pokedex__container">
        <p className="welcome">
          <span className="name">Welcome {trainerName},</span> search your
          favorite pokemon below!
        </p>
        <FormPoke urlBase={urlBase} setFormUrl={setFormUrl} />
        <div className="poke__container">
          <PokeContainer formUrl={formUrl} />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
