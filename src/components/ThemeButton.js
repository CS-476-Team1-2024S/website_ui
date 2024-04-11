import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
const ThemeButton = () => {
    return (
        <div className="theme-button">
            <input type="checkbox" className="theme-toggle" id="chk" onChange={() => {
                const html = document.querySelector("html");
                const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
                document.querySelector("html").setAttribute("data-theme", newTheme);
            }}/>
            <label className="theme-inner" htmlFor="chk">
                <FontAwesomeIcon icon={ faMoon } />
                <FontAwesomeIcon icon={ faSun } />
                <div className="ball"></div>
            </label>
        </div>
    );
}
export default ThemeButton;