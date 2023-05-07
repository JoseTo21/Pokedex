import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFecth from "../../hooks/useFetch";

const FormPoke = ({ setFormUrl, urlBase }) => {
  const inputPoke = useRef();

  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/type/";
  const [types, getAllTypes] = useFecth(url);

  useEffect(() => {
    getAllTypes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`;
    navigate(path);
  };

  const handleChange = (e) => {
    setFormUrl(e.target.value);
  };

  return (
    <div className="form__search">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputPoke}
          placeholder="Search a Pokemon here"
          type="text"
        />
        <button>Search</button>
      </form>
      <select className="option__poke" onChange={handleChange}>
        <option value={urlBase}>All Pokemons</option>
        {types?.results.map((type) => (
          <option value={type.url} key={type.url}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormPoke;
