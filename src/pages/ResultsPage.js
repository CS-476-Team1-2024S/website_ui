import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css'; // Import CSS file for styling

const ResultsPage = () => {
    const location = useLocation();
    const searchResultsString = location.state ? location.state.searchResults : '';
    const searchResults = searchResultsString ? searchResultsString.split(',') : [];

    // Function to extract the name from the file path
    const getNameFromPath = (path) => {
        const parts = path.split('/');
        return parts[parts.length - 1].replace('.md', ''); // Remove '.md' extension
    };

    // Render search results
    return (
        <div className="results-container">
            <h2 className="results-heading">Search Results</h2>
            <ul className="results-list">
                {searchResults.map((result, index) => (
                    <li key={index} className="result-item">
                        {/* Create a clickable link with the name as text */}
                        <Link to={`/page/${getNameFromPath(result)}`} className="result-link">
                            {getNameFromPath(result)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsPage;