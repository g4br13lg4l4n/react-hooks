import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from './Search';
import useCharacters from '../hooks/useCharacters'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

const Characters = () => {
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const API = 'https://rickandmortyapi.com/api/character';
    const characters = useCharacters(API);

    const handleClick = favorite => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }

    /*
    const handleSearch = () => {
        setSearch(searchInput.current.value)
    }
    */

    const handleSearch = useCallback(() => {
            setSearch(searchInput.current.value);
        }, [])
    /*
    const filteredUsers = characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    })
    */

    const filteredUsers = useMemo(() => 
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )

    const listCharters = () => filteredUsers.map(character => (
        <div className="item" key={character.id}>
            <h2>{character.name}</h2>
            <button type="button" onClick={() => handleClick(character)}>Agregar a favoritos</button>
        </div>
    ))

    return (
        <div className="Characters">
            <h2>Favoritos</h2>
            <div>
            {favorites.favorites.map(favorito => (
                <li key={favorito.id}>
                    { favorito.name }
                </li>
            ))}
            </div>
            <p>----------</p>
            { /* Search Component */ }
            <Search searchInput={searchInput} search={search} handleSearch={handleSearch} />
            { listCharters() }
        </div>
    );
}

export default Characters;