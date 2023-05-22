import React,{useState, useEffect} from 'react'
import { PokemonSelect } from './PokemonSelect';
import PokemonCard from './PokemonCard';
import useGetPokemons from '../hooks/useGetPokemons';
import useGetPokemon from '../hooks/useGetPokemon';

const PokemonSingle = () => { 
    const {pokemon,setPokemonId, pokemonId} = useGetPokemon();
    
    return (
        <div>
            <PokemonSelect pokemonId={pokemonId} setPokemonId={setPokemonId}/>
            <PokemonCard pokemon={pokemon} pokemonId={pokemonId} setPokemonId={setPokemonId} />
        </div>
    )
}

export default PokemonSingle