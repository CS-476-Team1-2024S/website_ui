import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeButton = () => {
    // State to manage the theme
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    // Effect to apply the theme to the document and localStorage when it changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="theme-button">
            <input
                type="checkbox"
                className="theme-toggle"
                id="chk"
                onChange={toggleTheme}
                checked={theme === 'dark'}
            />
            <label className="theme-inner" htmlFor="chk">
                <FontAwesomeIcon icon={faMoon} />
                <FontAwesomeIcon icon={faSun} />
                <div className="ball"></div>
            </label>
        </div>
    );
}

export default ThemeButton;
