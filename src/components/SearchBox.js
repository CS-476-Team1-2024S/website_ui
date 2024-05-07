import React, { useState } from 'react';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleOnSubmit = () => {
        window.location.href = '#results/' + searchTerm;
      }

    return (
        <div className="searchbox">
            <form onSubmit={handleOnSubmit} className="input">
                <input
                    type="text"
                    placeholder="Search for..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={handleOnSubmit}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBox;