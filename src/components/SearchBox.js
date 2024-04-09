import React, { useState } from 'react';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Perform search logic here
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="searchbox">
            <input
                type="text"
                placeholder="Search for..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBox;