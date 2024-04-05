import React from 'react';
const Directory = ({location}) => {
    console.log(window.location.pathname);
    // use path to figure out where we are in the directory listing of the website, then display the children and direct parents of the current webpage
    return (
        <table>
        <tbody>
            <tr><td><a href="/">Home</a></td></tr>
            <tr><td><a href="/about">About</a></td></tr>
        </tbody>
        </table>
    );
};
export default Directory;