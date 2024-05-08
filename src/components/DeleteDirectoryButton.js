import DeleteDirectory from '../hooks/DeleteDirectory';
import CheckUser from '../hooks/CheckUser';

const DeleteDirectoryButton = ({directory}) => {

    const deleteDirectory = async () => {
        try {
            await DeleteDirectory(directory, localStorage.getItem('userToken'));
            alert('Successfully deleted category!');
            window.location.href = '#/';
            window.location.reload();
        }
        catch (error) {
            alert('Failed to delete category: ', error);
        }
    };
    
    if (CheckUser()) {
        return <button className="rightButton" onClick={deleteDirectory}>Delete Category</button>;
    }
    else {
        return null;
    }
};
export default DeleteDirectoryButton;