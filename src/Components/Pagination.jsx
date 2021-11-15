import React from 'react';
import { getAllPokemon } from './api';

const Pagination = ({nextUrl, prevUrl, setPrevUrl, setNextUrl, setLoading, loadPokemon}) => {

const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
}

const prev = async () => {
    if(prevUrl!=null){
        setLoading(true);
        let data = await getAllPokemon(prevUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }
}

    return ( 
        <div>
            <button onClick={prev} className="border border-black rounded-md p-1 m-2 shadow-md bg-yellow-200 text-black">Anterior</button>
            <button onClick={next} className="border border-black rounded-md p-1 m-2 shadow-md bg-yellow-200 text-black">Siguiente</button>
        </div>
     );
}
 
export default Pagination;