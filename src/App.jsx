import React from "react";
import { Fragment } from "react";
import Header from "./Components/Header";
import Pokedex from "./Components/Pokedex";
import Pagination from "./Components/Pagination";
import { getPokemon, getAllPokemon } from "./Components/api";
import SearchBar from "./Components/SearchBar";

const { useState, useEffect } = React;
const initialUrl = "https://pokeapi.co/api/v2/pokemon";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      await loadPokemon(response.results);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    let pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let poke = await getPokemon(pokemon);
        return poke;
      })
    );
    setPokemons(pokemonData);
  };

  return (
      <Fragment>
        <section>
          <Header />
        </section>
            <div className="pl-48 pr-48 bg-back-pattern">
              <section>
                <SearchBar setPokemons={setPokemons}/>
              </section>
              <section>
                <div className="items-center flex justify-center">
                  <div className="flex flex-row justify-between items-center p-2.5">
                    <Pagination
                      nextUrl={nextUrl}
                      prevUrl={prevUrl}
                      setNextUrl={setNextUrl}
                      setPrevUrl={setPrevUrl}
                      setLoading={setLoading}
                      loadPokemon={loadPokemon}
                    />
                  </div>
                </div>
              </section>
              <section>
                <div>
                  <Pokedex
                    pokemons={pokemons}
                    loading={loading}
                  />
                </div>
              </section>
            </div>
      </Fragment>
  );
};

export default App;
