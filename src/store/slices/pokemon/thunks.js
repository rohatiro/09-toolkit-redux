import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemonList, startLoadingPokemon } from "./pokemonSlice";

export const getPokemonList = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemon() );

        // TODO: realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json()

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);

        dispatch( setPokemonList({ page: page + 1, pokemonList: data.results }) );
    };
};