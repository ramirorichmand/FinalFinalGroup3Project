import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Define EditTaskPopup functional component with props
const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    
    // Declare state variables for taskName and description
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    // Define handleChange function to handle input changes
    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }

    }
    // Use useEffect to set the initial values of taskName and description
    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

    // Define handleUpdate function to update the task
    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    // Render the EditTaskPopup component
    return (
            // 1. Create a Modal component with the provided isOpen and toggle props
        <Modal isOpen={modal} toggle={toggle}>
            {/* 2. Add a ModalHeader with the title "Update Task" and toggle functionality */}
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            
            {/* 3. Add a ModalBody to hold the form elements */}
            <ModalBody>
            
                {/* 4. Create a form group for the task name input field */}
                    <div className = "form-group">
                    {/* 4.1. Add a label for the task name input field */}
                        <label>Task Name</label>
                        {/* 4.2. Create an input field for the task name, set its value and onChange handler */}
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    {/* 5. Create a form group for the description textarea */}
                    <div className = "form-group">
                    {/* 5.1. Add a label for the description textarea */}
                        <label>Description</label>
                        {/* 5.2. Create a textarea for the description, set its value and onChange handler */}
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>

            {/* 6. Add a ModalFooter to hold action buttons */}
            </ModalBody>
            <ModalFooter>
            {/* 6.1. Create an "Update" button to update the task and set its onClick handler */}
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            {/* 6.2. Create a "Cancel" button to close the modal and set its onClick handler */}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;