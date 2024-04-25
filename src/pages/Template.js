import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Markdown from 'react-markdown';

const markdownPath = 'src/markdown/Fishing.txt';

const Template = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(markdownPath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch markdown file');
        }
        return response.text();
      })
      .then(markdownContent => {
        setMarkdown(markdownContent);
      })
      .catch(error => {
        console.error('Error fetching markdown file:', error);
      });
  }, []);

  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

createRoot(document.body).render(<Template />);
