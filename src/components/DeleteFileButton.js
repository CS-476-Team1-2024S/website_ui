import DeleteFile from '../hooks/DeleteFile';

const DeleteFileButton = ({directory, pageName}) => {

    const deletePage = async () => {
        try {
            await DeleteFile(`${directory}/${pageName}.md`, localStorage.getItem('userToken'));
            alert('Successfully deleted page!');
            window.location.href = `#category/${directory}`;
        }
        catch (error) {
            alert('Failed to delete page: ', error);
        }
    };

    if (localStorage.getItem('userName') !== null && localStorage.getItem('userToken') !== null) {
        return <button onClick={deletePage}>Delete Page</button>;
    }
    else {
        return null;
    }
};
export default DeleteFileButton;