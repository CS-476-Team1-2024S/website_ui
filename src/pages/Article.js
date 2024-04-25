import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Article = () => {
    return (
            <div className="content">
                <h1>How to Play Go Fish</h1>
                <h2>Part 1 | Starting the Game</h2>
                <p>
                    Pick someone to shuffle and deal the cards for the first round. Go Fish is great because it can be played with as few as 2 players and up to as many as 6 players. The dealer could be the person whose birthday is coming up next, the person who won the last game, or someone else you choose.<sup>[1]</sup>
                </p>
                <ul>
                    <li>Try to take turns being the dealer so that one person doesn’t get stuck doing it every time.</li>
                </ul>
                <a href="/">Back to Home</a>
            </div>
        );
};

export default Article;