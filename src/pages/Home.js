import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBox from '../components/SearchBox';
import LoggedInAs from '../components/LoggedInAs';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const Home = () => {
    const leftSide = `

Knowledgebase is a powerful online platform designed to store, organize, and share information efficiently. It operates as a community-driven repository where users can access a vast array of articles, guides, and tutorials on diverse subjects. Here’s how you can make the most out of your experience on Knowledgebase:

## Searching for Information
Use the **search bar** at the top of the homepage to quickly find specific topics or keywords.
~~Filters and advanced search options can help refine your results, making it easier to find the most relevant articles.~~

## Reading Articles
Each article on Knowledgebase provides detailed information on the subject, often accompanied by images, videos, and links to related resources.
You can navigate through different sections of an article using the contents sidebar for quick access to the information you need.

## Contributing to the Knowledgebase
If you have expertise in a particular area, you can contribute by creating new articles or editing existing ones to improve their accuracy and comprehensiveness.
~~All changes are typically reviewed by other community members or moderators to ensure the information remains reliable.~~

## ~~Interacting with the Community~~
~~Engage with other users by participating in discussions at the end of each article, where you can ask questions, provide answers, or share additional insights.~~
~~The platform may also feature forums or user groups focused on specific topics, allowing for deeper interaction and learning.~~

## ~~Tracking Changes and Updates~~
~~Subscribe to particular topics or articles to receive notifications about updates or new discussions.~~
~~This feature is particularly useful for staying current with evolving subjects or following areas of personal or professional interest.~~

By utilizing these features, users can both benefit from and contribute to the growing wealth of knowledge on Knowledgebase, making it a dynamic and valuable resource for information seekers and experts alike.
    `;
    const rightSide = `
Knowledgebase is an online platform that serves as a comprehensive repository of knowledge, similar to a community-driven encyclopedia. It is designed to facilitate the sharing, storage, and organization of information across a wide range of topics. Users from around the globe contribute to the growing database by writing articles, guides, and tutorials that help others learn and solve problems. Knowledgebase is ideal for anyone seeking detailed and reliable information on various subjects or looking to contribute their own expertise to the community.

    `;

    return (
        <div className="homepage">
            <div className="hometitle">
                <h1>Welcome to Knowledgebase</h1>
                <h3>Search for anything</h3>
            </div>
            <LoggedInAs />
            <SearchBox />
            <Box sx={{ flexGrow: 1, padding: 0 }}>
                <Grid container spacing={2} margin={[0, 0]}>
                    <Grid item xs={6}>
                        <div className="leftSectionHome">
                            <h2>How do I use Knowledgebase?</h2>
                            <Markdown remarkPlugins={[remarkGfm]}>{leftSide}</Markdown>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="rightSectionHome">
                            <h2>What is Knowledgebase?</h2>
                            <Markdown remarkPlugins={[remarkGfm]}>{rightSide}</Markdown>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
};
export default Home;
