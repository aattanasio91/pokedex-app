import React from "react";

const PokeCard = ({ pokemon }) => {

  const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };

  return (
      <div className="flex m-4 shadow-xl flex-col rounded-t-sm">

        <div className="flex items-center justify-center bg-blue-200 rounded-t-sm">
          <div>
            <img src={pokemon.sprites.other.dream_world.front_default} alt="" className="w-32 h-32 flex" />
          </div>
        </div>
        
        <div>
          <div className="flex flex-col justify-between p-2 flex-1 bg-white rounded-b-sm">
            
            <div className="flex flex-row justify-between items-center">
              <h3 className="capitalize text-2xl font-bold pb-3">#{pokemon.id} {pokemon.name}</h3>
            </div>

            <div>
              <div className="flex">
                {pokemon.types.map((type, idx) => {
                  return <div key={idx} className="capitalize border rounded-md w-16 h-auto" style={{
                    backgroundColor: `#${TYPE_COLORS[type.type.name]}`,
                    color: 'white'
                  }}><span className="items-center flex justify-center p-1">{type.type.name}</span></div>;
                })}
              </div>
            </div>

          </div>
        </div> 

      </div>
  );
};

export default PokeCard;
