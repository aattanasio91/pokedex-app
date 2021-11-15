import React from "react";
import Loader from "./Loader";

import PokeCard from "./PokeCard";

const Pokedex = ({ pokemons, loading }) => {
  return (
    <div>
      {loading ? (
        <div><Loader /></div>
      ) : (
        <div className="p-3 grid grid-cols-3 gap-18px pr-2.5 pb-5 pl-2.5 bg-white rounded-md bg">
          {pokemons.map((pokemon, idx) => {
            return <PokeCard key={idx} pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
