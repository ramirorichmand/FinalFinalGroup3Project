import React, {useState} from 'react';
import EditTask from '../Containers/EditTask'

// Create Card component with properties taskObj, index, deleteTask, and updateListArray
const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    // Initialise state variable modal with false
    const [modal, setModal] = useState(false);

    // Define an array 'colours' -> colors with objects containing primarycolor and secondarycolor
    const colors = [
        {
            primarycolor : "#5D93E1",
            secondarycolor : "#ECF3FC"
        },
        {
            primarycolor : "#F9D288",
            secondarycolor : "#FEFAF1"
        },
        {
            primarycolor : "#5DC250",
            secondarycolor : "#F2FAF1"
        },
        {
            primarycolor : "#F48687",
            secondarycolor : "#FDF1F1"
        },
        {
            primarycolor : "#B964F7",
            secondarycolor : "#F3F0FD"
        }
    ]

    // Define toggle function to toggle the value of the state variable 'modal'
    const toggle = () => {
        setModal(!modal);
    }
    // Define updateTask function with parameter obj
    const updateTask = (obj) => {
            // Call updateListArray function with obj and index as arguments
        updateListArray(obj, index)
    }
    // Define handleDelete function
    const handleDelete = () => {
        // Call deleteTask function with index as argument
        deleteTask(index)
    }
    // Render Card component
    return (
        // Create a div element with class 'card-wrapper' and 'mr-5'
        // Just for further clarity: This div wraps the entire card content. 
        //The card-wrapper class is responsible for the card's styling, 
        //while the mr-5 class adds a right margin to the card.
        <div class = "card-wrapper mr-5">

         {/* Create a div element with class 'card-top' and apply the background-colour style using primarycolour */}
         {/* Again for even further clarity: This div creates the top part of the card with a background color taken from the colours array. 
         The colour is determined by the index of the task in the list, modulo 5. This ensures that the color cycles through the available options as more tasks are added. */}
            <div class = "card-top" style={{"background-color": colors[index%5].primarycolor}}></div>

            {/* This div contains the task's information and actions. */}
            <div class = "task-holder">

            {/* Create a span element with class 'card-header' and apply the background-colour and border-radius 
            styles using the secondarycolour of colours array, display taskObj. */}
            {/* Again for further clarity - this span element displays the task's name with a background colour and border-radius 
            taken from the colours array, based on the index of the task. */}
                <span class = "card-header" style={{"background-color": colors[index%5].secondarycolor, "border-radius": "10px"}}>{taskObj.Name}</span>

                {/* This paragraph element displays the task's description. */}
                <p className = "mt-3">{taskObj.Description}</p>

                {/* This div contains the edit and delete icons, positioning them at the bottom right corner of the card. */}
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>

                    {/* This icon element represents the edit button, with a colour and cursor style taken from the colours array. 
                    When clicked, it sets the modal state to true, opening the EditTask modal. */}
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primarycolor, "cursor" : "pointer","marginRight":"20px"}} onClick = {() => setModal(true)}></i>

                    {/* This icon element represents the delete button, with a colour and cursor style taken from the colours array. 
                    When clicked, it calls the handleDelete function, which is responsible for deleting the task. */}
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primarycolor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        {/* This includes the EditTask component, passing the necessary props like the modal state, toggle function, updateTask function, and taskObj. 
        When the user clicks the edit button, the EditTask modal opens, allowing them to edit the task. */}
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

// exports the Card component, making it available for other components to import and use.
export default Card;

// In summary, the Card component is responsible for displaying individual tasks within the to-do list application, 
// including task name, description, and edit/delete buttons. 
//It uses the colours array to style the card based on its index, giving a visually distinct appearance for each task.