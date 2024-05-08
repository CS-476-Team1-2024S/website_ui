import React, { useState } from 'react';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        window.location.href = '#results/' + searchTerm;
      }

    return (
        <div className="searchBox">
            <form onSubmit={handleSearch} className="input">
                <input
                    type="text"
                    placeholder="Search for..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={handleSearch}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBox;