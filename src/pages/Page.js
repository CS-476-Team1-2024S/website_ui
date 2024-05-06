import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import MDEditor from '@uiw/react-md-editor';
import GetPageContent from '../hooks/GetPageContent';
import WriteToFile from '../hooks/WriteToFile';

const Page = () => {
    const { pageName } = useParams();
    const [editMode, setEditMode] = useState(false);
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
        setEditMode(false);
        fetchContent();
    }, [pageName]); // Determines when the effect will run. If empty, it will only run once after the initial render

    const writeToFile = async (path, content) => {
        try {
            await WriteToFile(path + ".md", content);
            alert('Successfully saved!');
        } catch (error) {
            alert('Failed to write to page: ', error);
        }
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = (newMarkdown) => {
        setPageContent(newMarkdown);
        setEditMode(false);
        writeToFile(pageName, pageContent);
    };

    if (!pageContent) {
        return (
            <div className="content">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="content">
            <h1>{pageName}</h1>
            {editMode ? (
                <button onClick={() => handleSaveClick(pageContent)}>Save</button>
            ) : (
                <button onClick={handleEditClick}>Edit</button>
            )}
            {editMode ? (
                <MDEditor value={pageContent} height="100%" visibleDragbar={false} onChange={setPageContent} />
            ) : (
                <Markdown>{pageContent}</Markdown>
            )}
        </div>
    );
}

export default Page;