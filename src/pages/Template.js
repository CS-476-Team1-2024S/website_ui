import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'

/* Local Template for Displaying Markdown Files*/
const fs = require('fs')
const markdownpath = 'src/markdown/Fishing.txt'


const markdown = fs.readFileSync(markdownpath, 'utf8');

const Template = () => {
    return (
    createRoot(document.body).render(<Markdown>{markdown}</Markdown>)
    );
};

