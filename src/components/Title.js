import React from 'react';

const Title = ({title}) => {
    title = title.charAt(0).toUpperCase() + title.slice(1); // Make a call to the API requesting the page title if there is one
    return (
        <>
        <h1>{title}</h1>
        </>
    );
};
export default Title;