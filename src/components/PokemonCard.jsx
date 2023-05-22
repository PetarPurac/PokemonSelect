import React, { useState } from 'react'
import useGetPokemons from '../hooks/useGetPokemons'
import useGetPokemon from '../hooks/useGetPokemon';

const PokemonCard = ({pokemon, pokemonId,  setPokemonId}) => {
    const {allPokemonsLength}= useGetPokemons();

    const previousItemHandler = () => {
        if(pokemonId === 1) return;
        setPokemonId(prev => prev - 1);
    }

    const nextItemHandler = () => {
        if(pokemonId === allPokemonsLength) return;
        setPokemonId(prev => prev + 1);
    }
    
  return (
    <div className="">
        <div className='card'>
            <h2>
                {pokemon.name}
            </h2>
            <img src={pokemon?.sprites?.front_shiny} alt="" />
        </div>
        <button onClick={previousItemHandler}>Prev</button>
        <button onClick={nextItemHandler}>Next</button>
    </div>
  )
}

export default PokemonCard