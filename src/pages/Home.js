import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBox from '../components/SearchBox';
import LoggedInAs from '../components/LoggedInAs';

const Home = () => {
    return (
        <div className="homepage">
            <div className="hometitle">
                <h1>Welcome to the _______ Wiki</h1>
                <h3>Search for anything</h3>
            </div>
            <LoggedInAs />
            <SearchBox />
            <Box sx={{ flexGrow: 1, padding: 0}}>
                <Grid container spacing={2} margin={[0,0]}>
                    <Grid item xs={6}>
                        <div className="leftSectionHome">
                            <h2>How do I use the _______ Wiki?</h2>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="rightSectionHome">
                            <h2>What is _______?</h2>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};
export default Home;