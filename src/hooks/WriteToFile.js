const WriteToFile = async (path, content, append, token) => {
    var bodyInfo = JSON.stringify({
        "fileInfo":
        {
            "path": `root/${path}`,
            "content": content,
            "append": append,
            "token": token
        }
    });

    return await fetch(`https://140.146.23.39:5001/File/Write`, {
        method: "SET",
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyInfo
    })
        .then(response => response.json())
        .catch(error => console.error(error));
};
export default WriteToFile;