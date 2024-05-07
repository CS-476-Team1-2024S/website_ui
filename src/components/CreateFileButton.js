import CreateFile from '../hooks/CreateFile';

const CreateFileButton = ({directory}) => {

    const createPage = async () => {
        try {
            var input = window.prompt('Name of the new page: ');
            if (input !== "" && input !== null) {
                await CreateFile(`${directory}/${input}.md`, localStorage.getItem('userToken'));
                alert('Successfully created page!');
                window.location.reload();
            }
            else if (input !== null){
                alert('Please enter a name for the page.');
                createPage();
            }
        } catch (error) {
            alert('Failed to create page: ', error);
        }
    };

    if(localStorage.getItem('userName') !== null && localStorage.getItem('userToken') !== null){
        return <button onClick={createPage}>New Page</button>;
    }
    else{
        return null;
    }
};
export default CreateFileButton;