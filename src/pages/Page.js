import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import MDEditor from '@uiw/react-md-editor';
import GetPageContent from '../hooks/GetPageContent';
import WriteToFile from '../hooks/WriteToFile';
import LoggedInAs from '../components/LoggedInAs';
import DeleteFileButton from '../components/DeleteFileButton';
import CheckUser from '../hooks/CheckUser';
import remarkGfm from 'remark-gfm';

const Page = () => {
    const { path } = useParams();
    const [editMode, setEditMode] = useState(false);
    const [pageContent, setPageContent] = useState(null);
    const [newContent, setNewContent] = useState(false);
    const pageName = String(path).split("-")[1];
    const directory = String(path).split("-")[0];
    const [isBlocking, setIsBlocking] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (editMode) {
                event.preventDefault();
                event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [editMode]);

    useEffect(() => {
        const unblock = () => setIsBlocking(false);

        if (editMode) {
            setIsBlocking(true);
        }

        return () => unblock(); // Clean up the blocking effect when editMode is false
    }, [editMode]);

    // Handle actual navigation programmatically
    useEffect(() => {
        if (!isBlocking) return;

        const stopNavigation = (e) => {
            e.preventDefault();
            if (window.confirm('You have unsaved changes. Are you sure you want to leave?')) {
                setIsBlocking(false); // Allow navigation
                window.location.href = e.target.href;
            }
        };

        // Attach click event listeners to all links
        const links = document.querySelectorAll('a');
        links.forEach(link => link.addEventListener('click', stopNavigation));

        return () => {
            // Remove click event listeners from all links
            links.forEach(link => link.removeEventListener('click', stopNavigation));
        };
    }, [isBlocking, navigate]);

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

    const handleEditor = (set) => {
        setEditMode(set);
        setNewContent(pageContent);
    }

    const handleSaveClick = (newMarkdown) => {
        setPageContent(newMarkdown);
        setEditMode(false);
        writeToFile(newMarkdown);
    };

    return (
        (pageContent === undefined) ?
            <div className="content">
                <h1 className='pageHeader'>Loading...</h1>
                <LoggedInAs />
            </div> :
            <div className="content">
                <h1 className='pageHeader'>{pageName}</h1>
                <LoggedInAs />
                {(!editMode && CheckUser()) ? (
                    <button className="leftButton" onClick={() => handleEditor(true)}>Edit</button>
                ) : (CheckUser()) ? (
                    <><button className="nextToLeftButton" onClick={() => handleSaveClick(newContent)}>Save</button>
                    <button className="leftButton" onClick={() => handleEditor(false)}>Cancel</button></>
                ) : (
                    null
                )}<DeleteFileButton directory={directory} pageName={pageName} />
                {editMode ? (
                    <MDEditor className="editor" value={newContent} height="600px" minHeight="100%" highlightEnable={false} visibleDragbar={false} onChange={setNewContent}/>
                ) : (pageContent === "") ? (
                    <h1>No content</h1>
                ) : (<Markdown className="markdownContent" remarkPlugins={[remarkGfm]}>{pageContent}</Markdown>)}
            </div>
    )
};

export default Page;