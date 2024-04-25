import React from 'react';

const Article = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100vh' }}>
            <h1>How to Play Go Fish</h1>
            <h2>Part 1 | Starting the Game</h2>
            <img src="/images/aid155200-v4-728px-Play-Go-Fish-Step-1-Version-3.jpg.webp" alt="Play Go Fish Step 1" style={{ border: '2px solid black' }} />
            <ol>
                <li>
                    <p>
                        Pick someone to shuffle and deal the cards for the first round. Go Fish is great because it can be played with as few as 2 players and up to as many as 6 players. The dealer could be the person whose birthday is coming up next, the person who won the last game, or someone else you choose.
                    </p>
                    <ul>
                        <li>Try to take turns being the dealer so that one person doesn’t get stuck doing it every time.</li>
                    </ul>
                </li>
            </ol>
            <a href="/">Back to Home</a>
        </div>
    );
};

export default Article;
