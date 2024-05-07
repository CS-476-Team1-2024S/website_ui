import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Scan from '../hooks/Scan'; // Import the hook to fetch search results
import '../index.css'; // Import CSS file for styling
import LoggedInAs from '../components/LoggedInAs';
import CreateFileButton from '../components/CreateFileButton';
import DeleteDirectoryButton from '../components/DeleteDirectoryButton';

const DirectoryPage = () => {
    const { directory } = useParams(); // Get the query parameter from the URL
    const [pages, setPages] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const data = await Scan("root");
                setPages(data.Data.Subdirectories.find(
                    subdir => subdir.Name === directory
                ));
                setSuccess(data.Success);
            } catch (error) {
                console.error('Failed to fetch pages:', error);
            }
        };

        fetchPages();
    }, [directory]); // Determines when the effect will run. If empty, it will only run once after the initial render

    if (!success || pages.Files.length === 0) {
        return (
            <div className="results-container">
                <LoggedInAs />
                <DeleteDirectoryButton directory={directory} /><h2 className="results-heading">No pages in category</h2><CreateFileButton directory={directory}/>
            </div>
        );
    }
    else {
        return (
            <div className="results-container">
                <LoggedInAs />
                <DeleteDirectoryButton directory={directory} /><h2 className="results-heading">{directory}</h2><CreateFileButton directory={directory}/>
                <ul className="results-list">
                    {pages?.Files?.map((name, index) => {
                        var filteredName = name.split(".md")[0];
                        return (
                            <li key={index} className="result-item">
                                <a href={"#page/" + directory + "-" + filteredName}>{filteredName}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default DirectoryPage;