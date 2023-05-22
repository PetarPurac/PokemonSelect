import {useEffect, useState} from 'react'

const useGetPokemons = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [allPokemonsLength, setAllPokemonsLength] = useState();

    useEffect(() => {
        async function getAllPokemons () {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
                const data = await response.json();
                setAllPokemons(data.results);
                setAllPokemonsLength(data.results.length);
            } catch (error) {
                console.log(error)
            }
        }
        getAllPokemons();
    }, [])
  return    {allPokemons, allPokemonsLength}
}

export default useGetPokemons