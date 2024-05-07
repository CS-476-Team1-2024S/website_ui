import DeleteDirectory from '../hooks/DeleteDirectory';

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
    
    if (localStorage.getItem('userName') !== null && localStorage.getItem('userToken') !== null) {
        return <button onClick={deleteDirectory}>Delete Category</button>;
    }
    else {
        return null;
    }
};
export default DeleteDirectoryButton;