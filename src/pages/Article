import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArticleContent from '../components/ArticleContent'; // Assuming you have a component for displaying article content

const Article = () => {
    return (
        <div className="article-page">
            <div className="article-title">
                <h1>Title of the Article</h1>
                <h3>Author Name - Date</h3>
            </div>
            <ArticleContent />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className="article-related">
                            <h2>Related Articles</h2>
                            {/* Render related article links or components here */}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Article;