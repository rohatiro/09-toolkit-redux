import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from './store/slices/pokemon';

export const PokemonApp = () => {
    const { isLoading, pokemonList, page } = useSelector( state => state.pokemon );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemonList() );
    }, [])

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />

            <span>Loading: { isLoading ? 'True' : 'False' }</span>
            <ul>
                {
                    pokemonList.map( pokemon => (
                        <li key={ pokemon.name }>{ pokemon.name }</li>
                    ))
                }
            </ul>

            <button
                disabled={ isLoading }
                onClick={() => dispatch( getPokemonList(page) ) }
            >Next</button>
        </>
    )
}
