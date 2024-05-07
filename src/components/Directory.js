import React, { useState, useEffect } from 'react';
import Scan from '../hooks/Scan';
import CreateDirectoryButton from './CreateDirectoryButton';

const Directory = () => {
    const [directory, setDirectory] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchDirectories = async () => {
            try {
                const data = await Scan("root");
                setDirectory(data.Data.Subdirectories.map(subdir => subdir.Name));
                setSuccess(data.Success);
            } catch (error) {
                console.error('Failed to fetch pages:', error);
            }
        };

        fetchDirectories();
    }, []); // Determines when the effect will run. If empty, it will only run once after the initial render

    if (!success) {
        return (
            <div className="sideBar">
                <table>
                    <tbody><div id="directory"><p>Loading...</p></div></tbody>
                </table>
            </div>
        );
    }
    else {
        return (
            <div className="sideBar">
                <img className="logo" src="images/logo.png" alt="Knowledgebase Site Logo"></img> 
                <CreateDirectoryButton />
                <div id="directory">
                    <table>
                        <tbody>
                            <tr><td><a href="#/"><p>Home</p></a></td></tr>
                            {directory.map((name, index) => {
                                return (
                                    <tr key={index}><td><a href={"#category/" + name}><p>{name}</p></a></td></tr>
                                );
                            })}
                            <tr><td><a href="#about"><p>About</p></a></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};
export default Directory;