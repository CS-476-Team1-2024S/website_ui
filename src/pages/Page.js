import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import GetPageContent from '../hooks/GetPageContent';

const Page = () => {
    const { pageName } = useParams();
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await GetPageContent(pageName + ".md");
                setPageContent(data);
            } catch (error) {
                console.error('Failed to fetch pages:', error);
            }
        };

        fetchContent();
    }, [pageName]); // Determines when the effect will run. If empty, it will only run once after the initial render

    if (!pageContent) {
        return <div>Loading...</div>;
    }

    return (
        <div className = "content">
            <h1>{pageName}</h1>
            <Markdown>{pageContent}</Markdown>
        </div>
    );
}

export default Page;