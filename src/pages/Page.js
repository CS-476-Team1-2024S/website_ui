import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import MDEditor from '@uiw/react-md-editor';
import GetPageContent from '../hooks/GetPageContent';
import WriteToFile from '../hooks/WriteToFile';
import LoggedInAs from '../components/LoggedInAs';
import DeleteFileButton from '../components/DeleteFileButton';

const Page = () => {
    const { path } = useParams();
    const [editMode, setEditMode] = useState(false);
    const [pageContent, setPageContent] = useState(null);
    const pageName = String(path).split("-")[1];
    const directory = String(path).split("-")[0];

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await GetPageContent(`${directory}/${pageName}.md`);
                setPageContent(data.Data.FileContent);
                //setSuccess(data.Success); //Once fixed, add this back in
            } catch (error) {
                console.error('Failed to fetch pages:', error);
            }
        };
        setEditMode(false);
        fetchContent();
    }, [directory, pageName]); // Determines when the effect will run. If empty, it will only run once after the initial render

    const writeToFile = async (content) => {
        try {
            const data = await WriteToFile(`${directory}/${pageName}.md`, content, false, localStorage.getItem('userToken'));
            if (!data.Success) {
                alert(`Failed to write to page: ${data.Content}`);
            }
            else {
                alert('Successfully saved!');
            }
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
        writeToFile(newMarkdown);
    };

    if (pageContent === "") {
        return (
            <div className="content">
                <h1>{pageName}</h1>
                <LoggedInAs />
                {(!editMode && localStorage.getItem('userName') !== null && localStorage.getItem('userToken') !== null) ? (
                    <button onClick={handleEditClick}>Edit</button>
                ) : (localStorage.getItem('userName') !== null && localStorage.getItem('userToken') !== null) ? (
                    <button onClick={() => handleSaveClick(pageContent)}>Save</button>
                ) : (
                    null
                )}<DeleteFileButton directory={directory} pageName={pageName}/>
                {editMode ? (
                    <MDEditor value={pageContent} height="100%" visibleDragbar={false} onChange={setPageContent} />
                ) : (
                    <h1>No content</h1>
                )}
            </div>
        );
    }
    else if (!pageContent) { //Change to !success once fixed
        return (
            <div className="content">
                <h1>Loading...</h1>
                <LoggedInAs />
            </div>
        );
    }

    return (
        <div className="content">
            <h1>{pageName}</h1>
            <LoggedInAs />
            {(!editMode && localStorage.getItem('userName') !== null && localStorage.getItem('userToken') !== null) ? (
                <button onClick={handleEditClick}>Edit</button>
            ) : (localStorage.getItem('userName') !== null && localStorage.getItem('userToken') !== null) ? (
                <button onClick={() => handleSaveClick(pageContent)}>Save</button>
            ) : (
                null
            )}<DeleteFileButton directory={directory} pageName={pageName}/>
            {editMode ? (
                <MDEditor value={pageContent} height="100%" visibleDragbar={false} onChange={setPageContent} />
            ) : (
                <Markdown>{pageContent}</Markdown>
            )}
        </div>
    );
}

export default Page;