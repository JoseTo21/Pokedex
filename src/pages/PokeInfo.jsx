import "./stylespages/pokeInfo.css";
import { useParams } from "react-router-dom";
import useFecth from "../hooks/useFetch";
import { useEffect } from "react";
import PokeInfoErr from "./PokeInfoErr";

const PokeInfo = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError] = useFecth(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

  return (
    <div>
      <nav>
        <img className="header__principal-info" src="/banner-pokedex.png" />
      </nav>
      {hasError ? (
        <PokeInfoErr />
      ) : (
        <>
          <article className="container">
            <div className="poke__info">
              <header
                className={`pokemon__header-i bg-${pokemon?.types[0].type.name}`}
              >
                <img
                  className="pokemon__sprite-i"
                  src={pokemon?.sprites.other["official-artwork"].front_default}
                />
              </header>
              <section className="poke__info-all">
                <h1
                  className={`pokemon__id color-${pokemon?.types[0].type.name}`}
                >
                  #{pokemon?.id}
                </h1>
                <div className="pokemon__name-i">
                  <h2
                    className={`pokemon__name-i color-${pokemon?.types[0].type.name}`}
                  >
                    {pokemon?.name}
                  </h2>
                </div>
                <div className="poke__wh">
                  <div className="poke__w">
                    <span className="w">Weight</span>
                    <span>{pokemon?.weight}</span>
                  </div>
                  <div className="poke__h">
                    <span className="h">Height</span>
                    <span>{pokemon?.height}</span>
                  </div>
                </div>
                <div className="poke__ta">
                  <article className="poke__type">
                    <h3>Main Type:</h3>
                    <p className={`poke__ts bg-${pokemon?.types[0].type.name}`}>
                      {pokemon?.types[0].type.name}
                    </p>
                  </article>
                  <article className="poke__ability">
                    <h3>Abilities:</h3>
                    <ul className="poke__ab">
                      {pokemon?.abilities.map((ab) => (
                        <li key={ab.ability.url}>{ab.ability.name}</li>
                      ))}
                    </ul>
                  </article>
                </div>
                <hr className={`border-${pokemon?.types[0].type.name}`} />
                <div className="poke__stats-i">
                  <h3>Base Stats:</h3>

                  <article className="po__stats">
                    <div className="poke__sts-indv">
                      <img className="stat__img" src="\heart-svgrepo-com.svg" />
                      <div className="po__st">
                        <h4 className={`color-${pokemon?.types[0].type.name}`}>
                          HP:
                        </h4>
                        <p>{pokemon?.stats[0].base_stat}</p>
                      </div>
                    </div>
                    <div className="poke__sts-indv">
                      <img
                        className="stat__img"
                        src="\sword-svgrepo-com (1).svg"
                      />
                      <div className="po__st">
                        <h4 className={`color-${pokemon?.types[0].type.name}`}>
                          Attack:
                        </h4>
                        <p>{pokemon?.stats[1].base_stat}</p>
                      </div>
                    </div>
                    <div className="poke__sts-indv">
                      <img
                        className="stat__img"
                        src="\shield-svgrepo-com.svg"
                      />
                      <div className="po__st">
                        <h4 className={`color-${pokemon?.types[0].type.name}`}>
                          Defense:
                        </h4>
                        <p>{pokemon?.stats[2].base_stat}</p>
                      </div>
                    </div>
                    <div className="poke__sts-indv">
                      <img
                        className="stat__img"
                        src="\speed-fast-svgrepo-com.svg"
                      />
                      <div className="po__st">
                        <h4 className={`color-${pokemon?.types[0].type.name}`}>
                          Speed:
                        </h4>
                        <p>{pokemon?.stats[5].base_stat}</p>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
              <div className="poke__movements">
                <h2 className={`color-${pokemon?.types[0].type.name}`}>
                  Movements:
                </h2>
                <div className="move__container">
                  {pokemon?.moves.slice(0, 20).map((move) => (
                    <p className="moves__poke" key={move.move.url}>
                      {move.move.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </>
      )}
    </div>
  );
};

export default PokeInfo;
