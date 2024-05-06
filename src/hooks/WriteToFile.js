const WriteToFile = async (path, content) => {
    var bodyInfo = JSON.stringify({
        "fileInfo":
        {
            "path": path,
            "content": content,
            "append": "false"
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