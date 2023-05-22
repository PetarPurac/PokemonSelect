import React, { useState } from 'react'
import useGetPokemons from '../hooks/useGetPokemons';
import useGetPokemon from '../hooks/useGetPokemon';

export const PokemonSelect = ({pokemonId, setPokemonId}) => {
    const {allPokemons} = useGetPokemons();

    const handleChange = (e) => {
        setPokemonId(Number(e.target.value));
    };
   
    return (
        <select name="pokemons" id="pokemons" value={pokemonId} onChange={handleChange}>
            {allPokemons.map((pokemon, idx) => (
                <option key={idx} value={idx + 1}>
                    {pokemon.name}
                </option>
            ))}
        </select>
    )
}
