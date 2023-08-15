import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemonList: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemon: ( state ) => {
            state.isLoading = true;
        },
        setPokemonList: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemonList = action.payload.pokemonList;
        }
    }
});

export const { startLoadingPokemon, setPokemonList } = pokemonSlice.actions;