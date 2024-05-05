const GetSearchResults = async (query) => {
    var bodyInfo = JSON.stringify({
        'searchInfo':
        {
            'query': query
        }
    });

    return await fetch(`https://140.146.23.39:5001/Search/Query`, {
        method: "SET",
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyInfo
    })
        .then(response => response.json())
        .catch(error => console.error(error));
};
export default GetSearchResults;