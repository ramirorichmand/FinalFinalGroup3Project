import React, {useEffect, useState} from 'react';
import CreateTask from '../Containers/CreateTask'
import Card from './Card';
import Countdown from './Countdown';

// Define the TodoList functional component
const TodoList = () => {
    // Declare state variables for modal and taskList
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    // Use useEffect to load taskList from localStorage on component mount
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
    // If there is an array in localStorage, parse it as an object and update the taskList state
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    // Define the deleteTask function to remove a task from the taskList by index
    const deleteTask = (index) => {
        // Create a temporary list of tasks and remove the task at the specified index
        let tempList = taskList
        tempList.splice(index, 1)
        // Update the "taskList" item in localStorage with the modified list
        localStorage.setItem("taskList", JSON.stringify(tempList))
        // Update the taskList state with the modified list and reload the page
        setTaskList(tempList)
        window.location.reload()
    }
    // Define the updateListArray function to update the taskList with a new task object at a specific index
    const updateListArray = (obj, index) => {
        // Create a temporary list of tasks and replace the task at the specified index with the new task object
        let tempList = taskList
        tempList[index] = obj
        // Update the "taskList" item in localStorage with the modified list
        localStorage.setItem("taskList", JSON.stringify(tempList))
        // Update the taskList state with the modified list and reload the page
        setTaskList(tempList)
        window.location.reload()
    }
    // Define the toggle function to show or hide the modal
    const toggle = () => {
        // Toggle the value of the modal state variable
        setModal(!modal);
    }
    // Define the saveTask function to save a new task to the taskList
    const saveTask = (taskObj) => {
        // Create a temporary list of tasks and add the new task object to the end
        let tempList = taskList
        tempList.push(taskObj)
        // Update the "taskList" item in localStorage with the modified list
        localStorage.setItem("taskList", JSON.stringify(tempList))
        // Update the taskList state with the modified list and close the modal
        setTaskList(taskList)
        setModal(false)
    }

    // Render the TodoList component
    return (
        <div className="background-image">
            <div className = "header text-center">
                <h2>Todo List</h2>
                {/* This is a button to create a new task. 
                When it's clicked, the onClick event sets the modal state to true, which opens the CreateTask modal. */}
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
                <Countdown />

            </div>
            {/* This div contains the list of tasks (cards). 
            It uses the taskList state variable to render a Card component for each task. */}
            <div className = "task-container background-image">
            {/* This code maps over the taskList array and creates a Card component for each task object. 
            It passes the necessary props like the task object, index, deleteTask function, and 
            updateListArray function to each Card component. */}
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            {/* This code includes the CreateTask component in the TodoList component. 
            It passes the necessary props like the toggle function, modal state, and saveTask function to the CreateTask component. 
            When the user clicks the "Create Task" button, the CreateTask modal opens, allowing them to create a new task. */}
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
         </div>
    );
};
// Export the TodoList component as default
export default TodoList;