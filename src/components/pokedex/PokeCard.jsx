import { useEffect } from "react";
import useFecth from "../../hooks/useFetch";
import "./styles/pokeCard.css";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [pokemon, getPokemonById] = useFecth(url);

  useEffect(() => {
    getPokemonById();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };

  return (
    <div className="pokemon__cards">
      <article
        onClick={handleClick}
        className={`pokemon border-${pokemon?.types[0].type.name}`}
      >
        <header className={`pokemon__header bg-${pokemon?.types[0].type.name}`}>
          <img
            className="pokemon__sprite"
            src={pokemon?.sprites.other["official-artwork"].front_default}
          />
        </header>
        <section className="pokemon__body">
          <h3 className={`pokemon__name color-${pokemon?.types[0].type.name}`}>
            {pokemon?.name}
          </h3>
          <ul className="pokemon__types">
            {pokemon?.types.map((type) => (
              <li className="pokemon__type-specific" key={type.type.url}>
                {type.type.name}
              </li>
            ))}
          </ul>
          <ul className="pokemon__stats">
            {pokemon?.stats.map((stat) => (
              <li className="pokemon__stats-specific" key={stat.stat.url}>
                <span className="pokemon__stats-label">{stat.stat.name}</span>
                <span
                  className={`pokemon__stats-value color-${pokemon?.types[0].type.name}`}
                >
                  {stat.base_stat}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
};

export default PokeCard;
