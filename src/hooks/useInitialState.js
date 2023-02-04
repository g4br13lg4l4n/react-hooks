import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const setDarkMode = darkMode => {
        setState({
            ...state,
            darkMode
        });
    }
    return {
        setDarkMode,
        state
    };
};


export default useInitialState;