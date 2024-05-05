import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import SearchBox from '../components/SearchBox';

const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            navigate(`/results/${searchTerm}`); // Navigate to ResultsPage with the search term as URL parameter
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="homepage">
            <div className="hometitle">
                <h1>Welcome to the _______ Wiki</h1>
                <h3>Search for anything</h3>
            </div>
            <SearchBox
                value={searchTerm}
                onChange={handleInputChange}
                onSearch={handleSearch}
            />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {/* Content sections */}
                </Grid>
            </Box>
        </div>
    );
};

export default Home;
