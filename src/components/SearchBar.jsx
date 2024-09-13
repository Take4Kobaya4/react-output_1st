import React from 'react';
import { TextField } from '@mui/material';

// searchQueryをvalue
const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
        <TextField
            type="text"
            valiant="outlined"
            fullWidth
            margin="normal"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
}

export default SearchBar;