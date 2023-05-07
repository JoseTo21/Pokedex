import { useEffect, useState } from "react";
import useFecth from "../../hooks/useFetch";
import PokeCard from "./PokeCard";
import Pagination from "./Pagination";

const PokeContainer = ({ formUrl }) => {
  const [pokemons, getAllPokemons] = useFecth(formUrl);
  const [pokeCards, setPokeCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsXPages, setPokemonsXPages] = useState(12);

  const lastIndexP = currentPage * pokemonsXPages;
  const firstIndexP = lastIndexP - pokemonsXPages;

  useEffect(() => {
    getAllPokemons();
  }, [formUrl]);

  useEffect(() => {
    if (pokemons?.results) {
      setPokeCards(pokemons.results);
    } else if (pokemons?.pokemon) {
      setPokeCards(pokemons.pokemon.map((poke) => poke.pokemon));
    }
  }, [pokemons]);

  return (
    <>
      <div className="poke__container">
        {pokemons?.results
          ? pokemons?.results
              .map((pokemon) => (
                <PokeCard key={pokemon.url} url={pokemon.url} />
              ))
              .slice(firstIndexP, lastIndexP)
          : pokemons?.pokemon
              .map((poke) => (
                <PokeCard key={poke.pokemon.url} url={poke.pokemon.url} />
              ))
              .slice(firstIndexP, lastIndexP)}
      </div>
      <Pagination
        pokemonsXPages={pokemonsXPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPokemons={pokeCards.length}
      />
    </>
  );
};

export default PokeContainer;
