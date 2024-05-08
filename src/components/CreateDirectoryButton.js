import CreateDirectory from '../hooks/CreateDirectory';
import CheckUser from '../hooks/CheckUser';

const CreateDirectoryButton = () => {

    const createDirectory = async () => {
        try {
            var input = window.prompt('Name of the new category: ');
            if (input !== "" && input !== null) {
                await CreateDirectory(input, localStorage.getItem('userToken'));
                alert('Successfully created category!');
                window.location.reload();
            }
            else if (input !== null){
                alert('Please enter a name for the category.');
                createDirectory();
            }
        } catch (error) {
            alert('Failed to create category: ', error);
        }
    };

    if(CheckUser()){
        return <button className="createDirectoryButton" onClick={createDirectory}>New Category</button>;
    }
    else{
        return null;
    }
};
export default CreateDirectoryButton;