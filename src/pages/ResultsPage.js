import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetSearchResults from '../hooks/GetSearchResults'; // Import the hook to fetch search results
import SearchBox from '../components/SearchBox'; // Import the search box component
import '../index.css'; // Import CSS file for styling

const ResultsPage = () => {
    var filteredResults;
    const { query } = useParams(); // Get the query parameter from the URL
    const [results, setResults] = useState(null);

    useEffect(() => {
        const search = async () => {
            try {
                const data = await GetSearchResults(query);
                setResults(data);
            } catch (error) {
                console.error('Failed to fetch results:', error);
            }
        };

        search();
    }, [query]); // Determines when the effect will run. If empty, it will only run once after the initial render

    if (!results) {
        return (
            <div className="results-container">
                <SearchBox />
                <h2 className="results-heading">Search Results</h2>
                <p>Nothing found, please try refining your search</p>
            </div>
        );
    }
    else {
        filteredResults = String(results).split("/").filter(line => line.includes('.md'));
        return (
            <div className="results-container">
                <SearchBox />
                <h2 className="results-heading">Search Results</h2>
                <ul className="results-list">
                    {filteredResults.map((links) => {
                        var formattedName = links.split(",")[0].split(".md")[0];
                        console.log(formattedName);
                        return (
                            <li key={formattedName} className="result-item">
                                <a href={`#page/${formattedName}`}><p>{formattedName}</p></a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default ResultsPage;