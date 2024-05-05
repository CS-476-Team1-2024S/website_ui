import { useState } from 'react';

const useSearchQuery = () => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const search = async (query) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://140.146.23.39:5001/Search/Query`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ searchInfo: { query } })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }

            const data = await response.json();
            setSearchResults(data); // Set the fetched data as searchResults
            setLoading(false); // Set loading to false after setting search results
            return data; // Return the data obtained from the API call
        } catch (error) {
            console.error('Error fetching search results:', error);
            setError(error);
            setLoading(false); // Set loading to false in case of error
            throw error; // Rethrow the error to be caught by the caller
        }
    };

    return {
        loading,
        searchResults,
        error,
        search
    };
};

export default useSearchQuery;