import React, { useState } from "react";
import { searchPokemon } from "./api";


const SearchBar = ({setPokemons}) => {

  const [search, setSearch] = useState("");
  
  const searchPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${search}`;
  
  const onChange = (e) => {
    var pokemon = e.target.value;
    var pokemonString = pokemon.toLowerCase();
    setSearch(pokemonString);
  };

  const onClick = async () => {
    if(search !== ''){
      let response = await searchPokemon(searchPokemonUrl);
      setPokemons([response]);
    }
  };

  const handler = async (event) => {
    if(event.key === 'Enter' && search !== ''){
      let response = await searchPokemon(searchPokemonUrl);
      setPokemons([response]);
    }
};

  return (
    <div className="flex mt-0 mr-24 ml-24 items-center p-12 justify-center">
      <div className="flex-1 pr-5">
        <input
          placeholder="Buscar un pokemon"
          className="p-2.5 shadow-md rounded-sm border-none w-full focus:outline-none"
          onChange={onChange}
          onKeyPress={(e) => handler(e)}
        />
      </div>
      <div>
        <button
          onClick={onClick}
          className="border-none rounded-md h-full ml-5 p-2.5 bg-blue-900 text-white shadow-lg"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
