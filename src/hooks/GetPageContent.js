const GetPageContent = async (path) => {
    var bodyInfo = JSON.stringify({
        'fileInfo':
        {
            'path': `root/${path}`
        }
    });

    return await fetch(`https://140.146.23.39:5001/File/Read`, {
        method: "SET",
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyInfo
    })
        .then(response => response.json())
        .catch(error => console.error(error));
};
export default GetPageContent;