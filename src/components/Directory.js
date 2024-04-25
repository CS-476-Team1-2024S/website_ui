import React from 'react';
const Directory = ({ location }) => {
    return (
        <div className="sideBar">
            <img className="logo" src="images/logo.png" alt="Knowledgebase Site Logo"></img>
            <div id="directory">
                <table>
                    <tbody>
                        <tr><td><a href="#/"><p>Home</p></a></td></tr>
                        <tr><td><a href="#about"><p>About</p></a></td></tr>
                        <tr><td><a href="#Article"><p>Sample Article (JS)</p></a></td></tr>
                         <tr><td><a href="#Template"><p>Markdown Test</p></a></td></tr>
                        <tr><td><a href="#login"><p>Login</p></a></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Directory;