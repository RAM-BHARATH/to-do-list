import { addProject,updateProjectsInStorage } from './Project';
import { addTask, deleteTask, viewTask, toggleTaskStatus, updateTasksInStorage } from './Task';
import { taskBox } from './Template';
import { Header, SideView, TaskBox, HomeView, taskCard, fillTasks,tasksInTaskBox,loopThroughProjects } from './Template';
import { createProjectBox,createTaskBox } from './Template';
// import {Navbar} from './TemplateForBootstrap';
// import tasks from './Task';
let currentProject = 'default';
let currentProjectId=0;

const content = document.getElementById('content');

// const projectChoice = document.getElementById('')

function initializer(){
    content.innerHTML='';
    content.appendChild(Header);
    content.appendChild(SideView());
    content.appendChild(TaskBox(currentProjectId));
    content.appendChild(createProjectBox);
    content.appendChild(createTaskBox);

    const deleteButtonList = document.querySelectorAll('.delete-option');

    console.log(deleteButtonList);
    for(let i=0;i<deleteButtonList.length;i++){
        deleteButtonList[i].addEventListener('click',function(){
            let taskToBeDeleted = deleteButtonList[i].parentNode.id;
            // console.log(`Delete button ${taskToBeDeleted} clicked`);
            deleteTask(taskToBeDeleted,currentProjectId);
            updateTasksInStorage();
            console.log(viewTask(currentProjectId));
            initializer();
        });
    }

    const statusToggleButtons = document.querySelectorAll('.status-option');
    console.log(statusToggleButtons);
    for(let i=0;i<statusToggleButtons.length;i++){
        // console.log(statusToggleButtons[i]);
        statusToggleButtons[i].addEventListener('click',function(){
            let changeTaskStatus = statusToggleButtons[i].parentNode.id;
            toggleTaskStatus(changeTaskStatus);
            console.log(viewTask(currentProjectId));
            updateTasksInStorage();
            initializer();
        });
    }

    const projectList = document.querySelectorAll('.view-project');
    console.log(projectList);
    for(let i=0;i<projectList.length;i++){
        console.log(projectList[i].id,projectList[i],projectList[i].innerText);
        projectList[i].addEventListener('click',function(){
            currentProject = projectList[i].innerText;
            currentProjectId = projectList[i].id;
            // setCurrentProject(currentProjectId);
            console.log(currentProjectId, currentProject, 'clicked');
            // console.log(viewTask(currentProjectId));
            // fillTasks(currentProjectId);
            // tasksInTaskBox(currentProjectId);
            initializer();
            // content.appendChild(TaskBox(currentProjectId));
            // updateTaskBox(currentProjectId);
            
        });
    }

    const side_view = document.getElementById('side-view');

    const menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click',function(){
        console.log('==='+side_view.style.right+'==='+side_view.style.top);
        if(side_view.style.right=='0px'){
            side_view.style.right='-500px';
        }
        else{
            side_view.style.right='0px';
        }
        console.log('Menu Button clicked');
        return;
    });

    const createProjectButton = document.getElementById('create-project-button');
    createProjectButton.addEventListener('click',function(){
        // console.log("Create Project Button clicked");
        toggleCreateProjectBox();
    });

}
// content.appendChild(Navbar());
initializer();

const menuIcon = document.getElementById('menu-icon');
const side_view = document.getElementById('side-view');
// const homeMenuItem = document.getElementById('home-menu-item');
// const taskViewMenuItem = document.getElementById('taskview-menu-item');
const taskCreateBoxToggler = document.getElementById('add-task-toggler');
const createProjectButton = document.getElementById('create-project-button');
const projectList = document.querySelectorAll('.view-project');
const addProjectButton = document.getElementById('add-project-button');

const addTaskButton = document.getElementById('add-task-button');


let title = document.getElementById('new-task-name');
let description = document.getElementById('new-task-description');
let dueDate = document.getElementById('new-task-date');
let priority = document.getElementById('new-task-priority');
let status = document.getElementById('new-task-status');

let projectTitle = document.getElementById('new-project-title');

// console.log(projectList);
// for(let i=0;i<projectList.length;i++){
//     console.log(projectList[i].id,projectList[i],projectList[i].innerText);
//     projectList[i].addEventListener('click',function(){
//         currentProject = projectList[i].innerText;
//         currentProjectId = projectList[i].id;
//         // setCurrentProject(currentProjectId);
//         console.log(currentProjectId, currentProject, 'clicked');
//         // console.log(viewTask(currentProjectId));
//         // fillTasks(currentProjectId);
//         // tasksInTaskBox(currentProjectId);
//         initializer();
//         // content.appendChild(TaskBox(currentProjectId));
//         // updateTaskBox(currentProjectId);
        
//     });
// }

addProjectButton.addEventListener('click',function(){
    console.log('Add project button clicked');
    if(projectTitle.value!=''){
        addProject(projectTitle.value);
        // loopThroughProjects();
        initializer();
    }
    updateProjectsInStorage();
    toggleCreateProjectBox();
});

addTaskButton.addEventListener('click',function(){
    console.log("Add task button clicked");
    // addTask(project,projectId,title, description,dueDate,priority,status)

    if(title.value!='' && description.value!='' && dueDate.value!=''){
        console.log(title.value,description.value,dueDate.value,priority.value,status.checked);
        addTask(currentProject,currentProjectId,title.value,description.value,dueDate.value,priority.value,status.checked);
        initializer();
        clearCreateTaskBox();
    }
    updateTasksInStorage();
    toggleCreateTaskBox();
});

// menuIcon.addEventListener('click',toggleSideBar);
// homeMenuItem.addEventListener('click',function(){
//     initializer();
//     // toggleSideBar();
//     content.appendChild(HomeView);
// });
// taskViewMenuItem.addEventListener('click',function(){
//     initializer();
//     toggleSideBar();
    
//     TaskBox.appendChild(taskCard);
// });
taskCreateBoxToggler.addEventListener('click',function(){
    // console.log("Create Task Button clicked");
    toggleCreateTaskBox();
});
// createProjectButton.addEventListener('click',function(){
//     // console.log("Create Project Button clicked");
//     toggleCreateProjectBox();
// });
function toggleCreateTaskBox(){
    // console.log('==='+createTaskBox.style.right+'==='+createTaskBox.style.top);
    if(createTaskBox.style.top!=='0px'){
        createTaskBox.style.top='0px';
    }else{
        createTaskBox.style.top='-500px';
    }
    return;
}
function toggleCreateProjectBox(){
    console.log('Create project clicked');
    if(createProjectBox.style.right==='0px'){
        createProjectBox.style.right='-500px';
    }else{
        createProjectBox.style.right='0px';
    }
    return;
}
// function toggleSideBar(side_view){
//     console.log('==='+side_view.style.right+'==='+side_view.style.top);
//     if(side_view.style.right=='0px'|| !side_view.style.right){
//         side_view.style.right='-500px';
//     }
//     else{
//         side_view.style.right='0px';
//     }
//     console.log('Menu Button clicked');
//     return;
// }

function clearCreateTaskBox(){
    title.value='';
    description.value='';
    dueDate.value='';
    priority.value=0;
    status.checked=false;
    return;
}


console.log(menuIcon);
// loopThroughProjects();

// function getCurrentProject(){

// }
// function setCurrentProject(){

// }
console.log("Current project ID: "+currentProjectId);