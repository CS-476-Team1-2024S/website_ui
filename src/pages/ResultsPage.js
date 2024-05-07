import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetSearchResults from '../hooks/GetSearchResults'; // Import the hook to fetch search results
import SearchBox from '../components/SearchBox'; // Import the search box component
import '../index.css'; // Import CSS file for styling

const ResultsPage = () => {
    const { query } = useParams(); // Get the query parameter from the URL
    const [results, setResults] = useState(null);

    useEffect(() => {
        const search = async () => {
            try {
                const data = await GetSearchResults(query);
                if (data.Success) {
                    setResults(data.Data.FilePaths);
                    console.log(results);
                }
                else {
                    alert(`Failed to search: ${data.Content}`);
                }
            } catch (error) {
                alert('Failed calling API: ', error);
            }
        };

        search();
    }, [query]); // Determines when the effect will run. If empty, it will only run once after the initial render

    return (
        <div className="results-container">
            <SearchBox />
            <h2 className="results-heading">Search Results</h2>
            {(!results || results === null) ? <p>Loading...</p> :
                (results?.length === 0) ? 
                <p>Nothing found, please try refining your search.</p> :
                <ul className="results-list">
                    {results?.map((links, index) => {
                        var directory = links.split("/")[1];
                        var fileName = links.split("/")[2].split(".md")[0];
                        return (
                            <li key={index} className="result-item">
                                <a href={`#page/${directory}-${fileName}`}><p>{fileName}</p></a>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );
}
export default ResultsPage;