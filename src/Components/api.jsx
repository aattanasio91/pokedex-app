export function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export const searchPokemon = async (url) => {
    let response = await fetch(url);

    if(response.ok){
        let data = await response.json();
        return data;
    }else {
        alert("Error buscando el pokemon, inténtelo nuevamente");
        window.location.reload();
    }
}