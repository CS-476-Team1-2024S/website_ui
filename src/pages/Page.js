import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import MDEditor from '@uiw/react-md-editor';
import GetPageContent from '../hooks/GetPageContent';
import WriteToFile from '../hooks/WriteToFile';
import LoggedInAs from '../components/LoggedInAs';
import DeleteFileButton from '../components/DeleteFileButton';
import CheckUser from '../hooks/CheckUser';

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
                if(data.Success){
                    setPageContent(data.Data.FileContent);
                }
                else{
                    alert(`Failed to get page content: ${data.Content}`);
                }
            } catch (error) {
                alert('Failed calling API: ', error);
            }
        };
        
        setEditMode(false);
        fetchContent();
    }, [directory, pageName]); // Determines when the effect will run. If empty, it will only run once after the initial render

    const writeToFile = async (content) => {
        try {
            const data = await WriteToFile(`${directory}/${pageName}.md`, content, false, localStorage.getItem('userToken'));
            if (data.Success) {
                alert('Successfully saved!');
            }
            else {
                alert(`Failed to write to page: ${data.Content}`);
            }
        } catch (error) {
            alert('Failed calling API: ', error);
        }
    };

    const handleSaveClick = (newMarkdown) => {
        setPageContent(newMarkdown);
        setEditMode(false);
        writeToFile(newMarkdown);
    };

    return (
        (pageContent === undefined) ?
            <div className="content">
                <h1>Loading...</h1>
                <LoggedInAs />
            </div> :
            <div className="content">
                <h1>{pageName}</h1>
                <LoggedInAs />
                {(!editMode && CheckUser()) ? (
                    <button onClick={setEditMode}>Edit</button>
                ) : (CheckUser()) ? (
                    <button onClick={() => handleSaveClick(pageContent)}>Save</button>
                ) : (
                    null
                )}<DeleteFileButton directory={directory} pageName={pageName} />
                {editMode ? (
                    <MDEditor value={pageContent} height="100%" visibleDragbar={false} onChange={setPageContent} />
                ) : (pageContent === "") ? (
                    <h1>No content</h1>
                ) : (<Markdown>{pageContent}</Markdown>)}
            </div>
    )
};

export default Page;