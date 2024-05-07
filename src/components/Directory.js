import React, { useState, useEffect } from 'react';
import Scan from '../hooks/Scan';
import CreateDirectoryButton from './CreateDirectoryButton';

const Directory = () => {
    const [directory, setDirectory] = useState(null);

    useEffect(() => {
        const fetchDirectories = async () => {
            try {
                const data = await Scan("root");
                if (data.Success) {
                    setDirectory(data.Data.Subdirectories.map(subdir => subdir.Name));
                }
                else {
                    alert(`Failed to get directories: ${data.Content}`);
                }
            } catch (error) {
                alert('Failed calling API: ', error);
            }
        };

        fetchDirectories();
    }, []); // Determines when the effect will run. If empty, it will only run once after the initial render

    return (
        <div className="sideBar">
            <img className="logo" src="images/logo.png" alt="Knowledgebase Site Logo"></img>
            <CreateDirectoryButton />
            <div id="directory">
                <table className="dirTable">
                    <tbody>
                        <tr>
                            <td>
                                <a href="#/">Home</a>
                            </td>
                        </tr>
                        {(!directory) ?
                            <tr>
                                <td>Loading...</td>
                            </tr> :
                            directory.map((name, index) => {
                                return (
                                    <tr key={index}><td><a href={"#category/" + name}>{name}</a></td></tr>
                                );
                            })}
                        <tr>
                            <td>
                                <a href="#about">About</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Directory;