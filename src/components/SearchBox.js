import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearchQuery from '../hooks/useSearchQuery';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { search } = useSearchQuery(); // Destructure the search function from the hook

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = async () => {
        setLoading(true);
        try {
            // Call the search function with the search term
            const searchResults = await search(searchTerm);
            console.log(searchResults);
            // Navigate to the results page with the search results as query parameter
            navigate(`/results?query=${encodeURIComponent(searchTerm)}`, { state: { searchResults } });
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="searchbox">
            <input
                type="text"
                placeholder="Search for..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
        </div>
    );
};

export default SearchBox;