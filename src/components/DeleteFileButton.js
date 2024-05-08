import DeleteFile from '../hooks/DeleteFile';
import CheckUser from '../hooks/CheckUser';

const DeleteFileButton = ({ directory, pageName }) => {

    const deletePage = async () => {
        if (window.confirm("Are you sure you want to delete this page? This action cannot be undone.")) {
            try {
                await DeleteFile(`${directory}/${pageName}.md`, localStorage.getItem('userToken'));
                alert('Successfully deleted page!');
                window.location.href = `#category/${directory}`;
            }
            catch (error) {
                alert('Failed to delete page: ', error);
            }
        }
    };

    if (CheckUser()) {
        return <button className="rightButton" onClick={deletePage}>Delete Page</button>;
    }
    else {
        return null;
    }
};
export default DeleteFileButton;