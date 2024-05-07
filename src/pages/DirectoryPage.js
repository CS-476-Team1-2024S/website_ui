import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetPages from '../hooks/GetPages'; // Import the hook to fetch search results
import '../index.css'; // Import CSS file for styling

const DirectoryPage = () => {
    var pageList;
    const { directory } = useParams(); // Get the query parameter from the URL
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
            <div className="results-container">
                <h2 className="results-heading">No pages found</h2>
            </div>
        );
    }
    else {
        pageList = String(pages).split("    ¬").filter(line => line.includes('.md'));
        return (
            <div className="results-container">
                <h2 className="results-heading">{directory}</h2>
                <ul className="results-list">
                    {pageList.map((page) => {
                        var formattedName = page.split(".")[0];
                        return (
                            <li key={formattedName} className="result-item">
                                <a href={"#page/" + directory + "-" + formattedName}>{formattedName}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default DirectoryPage;