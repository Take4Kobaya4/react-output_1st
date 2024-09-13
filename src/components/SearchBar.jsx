import React from 'react';

// searchQueryをvalue
const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
        <input
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
}

export default SearchBar;