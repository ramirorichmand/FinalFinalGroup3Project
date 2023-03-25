# Star Taskers 🌟 📚

<h3>Front-end React app based on merge no-conflict's online bookshelf API, made by HackStreet Boys.</h3>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!-- <hr /> -->

## Our Presentation

**To be added in later**

## How to run

**Open and run back-end API in IntelliJ:**

  1.	Clone API from GitHub (https://github.com/hansinemarshall/planner_api):
        - In Terminal: `git clone git@github.com:hansinemarshall/planner_api.git`
  3.	Create local database called “planner_api”: 
         -	In Terminal: `createdb planner`
  4.	Download and install IntelliJ
  5.	Open API in IntelliJ
  6.	Run API from `PlannerApiApplication` file:
        -	Check API is running by opening `http://localhost:8080` on your desktop browser.
       
**Open and run front-end project in VSCode:** 

  1.	Clone project from GitHub (https://github.com/ramirorichmand/StarTaskers_FrontendProject)
        - In Terminal: `git clone git@github.com:ramirorichmand/StarTaskers_FrontendProject.git`
  3.	Install node modules: 
        -	In Terminal: `npm i` or `npm install`
  4.	Download and open VSCode
  5.	Run React App:
        -	In Terminal: `npm start`
        -	App should open automatically on browser
        -	Otherwise check app is running by opening `http://localhost:3000` on your desktop browser

## Routes

The following are the Routes available on the React app, configured using the React Router library:

Landing page: `http://localhost:3000`

All Do Lists: `http://localhost:8080/todolists`

To Do List By Id: `http://localhost:8080/todolists/1`

## Our Demo 
### Demonstrating CRUD functionality

https://user-images.githubusercontent.com/122550071/227718056-60daf804-4956-4cb3-924a-0c595ba64e77.mp4

## Postman 

The following allows you to download all of the API requests (Get, Post, Put and Delete) for use in Postman:

`Bookshelf_API.postman_collection`

To use:

1. Download and open Postman on desktop.
2. Import `Bookshelf_API.postman_collection`: 

    `File` > `Import` > `Choose Files` > `Bookshelf_API.postman_collection`


## Postman Instructions

### 1. GET (SHOW)

**1.1 GET AllDoLists** <br>
``````
Method: GET 
Endpoint : /todolists
URL: http://localhost:8080/todolists
```````

This GET request retrieves all the to-do lists available in the API.

**1.2 GET ToDoListById** <br>
``````
Method: GET 
Endpoint : /todolists/1
URL: http://localhost:8080/todolists/1
```````

This GET method retrieves a single ToDoList resource by its unique identifier (Id) specified in the URL path parameter. In this case, the Id is 1. The method returns the ToDoList object with all its associated ToDoItems, if any, and related information such as the priority,topic and date.

<hr />

### 2. POST (CREATE)

**2.1 POST New ToDoList**:<br>
``````
Method: POST 
Endpoint : /todolists
URL: http://localhost:8080/todolists
```````

The request body must be a JSON object containing the date and topic enum values. The topic enum values are all listed in the API description section. If the request is successful, it will respond with a status code of 201 (Created) and the newly created ToDoList object in the response body.

**NOTE - When a new (empty) list is created, it shows up as `completed=true` , until items are added to it.**

In Postman, select Body -> JSON -> raw  and enter the following for the request body: 
```````
{
   "date" :  "2023-12-03",
   "topic" : "GIFT_IDEAS"
}
```````

In this example, the topic enum value is "GIFT_IDEAS". If you want to use other examples, please refer to the listed topic enum values in the API description. Anything not on the list will NOT work.

**2.2 POST New ToDoItem**: 
``````
Method: POST 
Endpoint : /todolists/1
URL: http://localhost:8080/todolists/1
```````

This method is used to create a new ToDoItem within a specific ToDoList. The "1" is the id of the ToDoList that the new ToDoItem will be added to.Once the request is made, the server will create a new ToDoItem object with the provided information and add it to the specified ToDoList. If the creation is successful, it will respond with a status code of 201 (Created) and the newly created ToDoItem in the response body.

In Postman, select Body -> JSON -> raw  and enter the following for the request body:

``````
{
    "task" : "Buy Dairy-Milk Chocolate"
}
``````

<hr />

### 3. PATCH (UPDATE)

**3.1 PATCH UpdateItemCompletion**:

``````
Method: PATCH 
Endpoint : /todolists/1/item/5
URL: http://localhost:8080/todolists/1/item/5
```````
This method is used to update the completion status of a ToDoItem. "1"  is the id of the ToDoList and "5" is the id of the specific ToDoItem being updated. The request body should contain a boolean value indicating the new completion status.If the value is true, it means the ToDoItem is completed, and if the value is false, it means the ToDoItem is not completed. 

In Postman, select Body -> JSON -> raw  and enter the following for the request body:

```````
true
```````

**NOTE: No curly brackets are required in the request body.** 

**3.2 PATCH ChangeItemPriority**:
``````
Method: PATCH 
Endpoint : /todolists/item/5
URL: http://localhost:8080/todolists/item/5
```````
This method updates the priority of a specific to-do item in a to-do list based on the given item Id in the URL. The request body takes an enum value that corresponds to the priority level (LOW, MEDIUM, or HIGH), where 0 represents LOW, 1 represents MEDIUM, and 2 represents HIGH.

In Postman, select Body -> JSON -> raw  and enter the following for the request body:

````
1
````

In this example, the priority level is changed to MEDIUM. <br> 
Put in 0 to change  priority level to LOW.<br>
Put in 2 to change  priority level to HIGH.<br>

**NOTE: No curly brackets are required in the request body.** 

<hr />

### 4. DELETE

**4.1 DELETE ToDoItem**
``````
Method: DELETE
Endpoint : /todolists/1/item/1
URL: http://localhost:8080/todolists/1/item/1
```````

This method removes a specific ToDoItem from the ToDoList with the Id of 1. This method can be used to delete completed or unnecessary items from the ToDoList.The response body is empty, and the response status code is 204 No Content, indicating that the request has been successfully processed.

**4.2 DELETE ToDoList**
``````
Method: DELETE
Endpoint : /todolists/1
URL: http://localhost:8080/todolists/1
```````
This method allows the deletion of a specific ToDoList by using its Id in the URL. "1" is the Id of the ToDoList to be deleted.The response body is empty, and the response status code is 204 No Content, indicating that the request has been successfully processed.

**NOTE: When the last item in a list is deleted,the list itself is also deleted.** 

<hr />

## Dependencies
- Spring Data JPA
- Spring Web
- SpringBoot Devtools

<hr />

## Collaborators

- GitHub: [Ramiro ](https://github.com/ramirorichmand)
- GitHub: [Forida ](https://github.com/hellomati)
- GitHub: [Mohamed Abdi](https://github.com/mohincode)

<br />


