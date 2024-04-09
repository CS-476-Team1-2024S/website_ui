import React from 'react';
const Directory = ({location}) => {
    //console.log(window.location.pathname);
    // use path to figure out where we are in the directory listing of the website, then display the children and direct parents of the current webpage
    return (
        <>
        <img className="logo" src="images/logo.png" alt="Knowledgebase Site Logo"></img>
        <div className="directory">
        <table>
        <tbody>
            <tr><td><a href="/"><p>Home</p></a></td></tr>
            <tr><td><a href="/about"><p>About</p></a></td></tr>
        </tbody>
        </table>
        </div>
        </>
    );
};
export default Directory;