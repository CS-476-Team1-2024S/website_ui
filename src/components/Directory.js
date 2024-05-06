import React, { useState, useEffect } from 'react';
import GetPages from '../hooks/GetPages';

const Directory = () => {
    var pageList;
    const [pages, setPages] = useState(null);

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const data = await GetPages();
                setPages(data);
            } catch (error) {
                console.error('Failed to fetch pages:', error);
            }
        };

        fetchPages();
    }, [pages]); // Determines when the effect will run. If empty, it will only run once after the initial render

    if (!pages) {
        return (
            <div className="sideBar">
                <table>
                    <tbody><div id="directory"><p>Loading...</p></div></tbody>
                </table>
            </div>
        );
    }
    else {
        pageList = String(pages).split("    ¬").filter(line => line.includes('.md'));
        console.log(pageList);
        return (
            <div className="sideBar">
                <img className="logo" src="images/logo.png" alt="Knowledgebase Site Logo"></img>
                <div id="directory">
                    <table>
                        <tbody>
                            <tr><td><a href="#/"><p>Home</p></a></td></tr>
                            {pageList.map((page) => {
                                var formattedName = page.split(".")[0];
                                return (
                                    <tr key={formattedName}><td><a href={"#page/" + formattedName}><p>{formattedName}</p></a></td></tr>
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