import DeleteFile from '../hooks/DeleteFile';
import CheckUser from '../hooks/CheckUser';

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

    if (CheckUser()) {
        return <button onClick={deletePage}>Delete Page</button>;
    }
    else {
        return null;
    }
};
export default DeleteFileButton;