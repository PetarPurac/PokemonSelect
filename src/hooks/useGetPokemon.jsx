import { useState, useEffect } from 'react';

const useGetPokemon = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemonByName() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const singlePokemon = await response.json();
        setPokemon(singlePokemon);
      } catch (error) {
        console.log(error);
      }
    }

    getPokemonByName();
  }, [pokemonId]);

  return { pokemon, pokemonId, setPokemonId };
};

export default useGetPokemon;