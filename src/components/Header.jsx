import React, {useContext} from 'react';
import AppContext from '../context/AppContext';

const Header = () => {
    const {state, setDarkMode} = useContext(AppContext);
    const { darkMode } = state;

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="Header">
            <h1>ReactHook</h1>
            <button type="button" onClick={handleClick}> { darkMode ? 'DarkMode' : 'LightMode' } </button>
        </div>
    );
}

export default Header;