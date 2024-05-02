import React, { useState } from 'react';

const GetPages = async () => {
    return await fetch(`https://140.146.23.39:5001/Directory/Scan`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(response => response.json())
        .catch(error => console.error(error));
};
export default GetPages;