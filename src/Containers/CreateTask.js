import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SERVER_URL = "http://localhost:8080/todolists";

// Define the CreateTaskPopup functional component
const CreateTaskPopup = ({modal, toggle, save}) => {
    // Declare state variables for taskName and description
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    // Define the handleChange function to handle input changes
    const handleChange = (e) => {
        // Destructure name and value from the event target
        const {name, value} = e.target

        // Update the corresponding state variable based on the input name
        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }
    // Define the handleSave function to save the task object
    const handleSave = (e) => {
        e.preventDefault()
        // Create an empty task object and populate it with taskName and description
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        // Call the save function prop to save the task object
        save(taskObj)

    }
    // Render the CreateTaskPopup component
    return (
        // 1. Create a Modal component with the provided isOpen and toggle props
        <Modal isOpen={modal} toggle={toggle}>
            {/* 2. Add a ModalHeader with the title "Create Task" and toggle functionality */}
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            {/* 3. Add a ModalBody to hold the form elements */}
            <ModalBody>
                    {/* // 4. Create a form group for the task name input field */}
                    <div className = "form-group">
                    {/* // 4.1. Add a label for the task name input field */}
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
            
            {/* 6. Add a ModalFooter under Body to hold action buttons */}
            </ModalBody>

            <ModalFooter>
            
            {/* 6.1. Create a "Create" button to save the task and set its onClick handler */}
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}

            {/* 6.2. Create a "Cancel" button to close the modal and set its onClick handler */}
            <Button color="secondary" onClick={toggle}>Cancel</Button>

            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;