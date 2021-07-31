import {addTask, viewTask, deleteTask, deleteAllTasksInProject,tasks} from "./Task";
import {searchForProject, addProject, deleteProject,viewProjects, projects} from './Project';

function createElement(tagName, attrs = {}, ...children) {
  if (tagName === 'fragment') return children;
  const elem = Object.assign(document.createElement(tagName), attrs)
  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child);
    else elem.append(child);
  }
  return elem;
}

const Header = (
  <div id='header'>
    <h1>ToDo List</h1>
    <div className='menu-icon' id='add-task-toggler'>
      <abbr title="Create New Task">
        <img src='../assets/plus.svg'/>
      </abbr>
    </div>
    <div className='menu-icon' id='menu-icon'>
      <img src='../assets/hamburger_icon.svg'/>
    </div>
  </div>
);

const SideView =() =>(
  <div className='side-view' id='side-view'>
    <ul className='side-view-content' id='side-view-content'>
      <li className='side-view-item' id='create-project-button'><img src='../assets/plus.svg'/></li>
      {/* <li className="side-view-item">Today</li>
      <li className='side-view-item' id='home-menu-item'>Home</li>
      <li className='side-view-item' id='taskview-menu-item'>Project</li> */}
      {ProjectBox()}
    </ul>
  </div>
);

const createProjectBox = (
  <div className='create-project-box'>
    <form>
      <input type='text' placeholder='Project Title' id='new-project-title'/>
      <div className='add-button' id='add-project-button' name='add-project-button'>Add project</div>
    </form>
  </div>
);
const createTaskBox = (
    <div className='create-task-box'>
      <form>
        <input type='text' placeholder='Task title' name='new-task-name' id='new-task-name' value='' required/>
        <input type='text' placeholder='Task description' name='new-task-description' id='new-task-description' max='200' value='' required/>
        {/* <input type='dropdown' placeholder='Priority'/> */}
        <div>
          <label for='priority'>Priority </label>
          <select placeholder='Priority' name='new-task-priority' id='new-task-priority' required>
            <option value='0'>Low</option>
            <option value='1'>Medium</option>
            <option value='2'>High</option>
          </select>
        </div>
        <input type='date' name='new-task-date' id='new-task-date' required/>
        <div>
        <label>Status</label>
          <input type='checkbox' style='width:fit-content' name='new-task-status' id='new-task-status' />
        </div>
        <div type='submit' className='add-button' id='add-task-button' name='add-task-button' >Add task</div>
      </form>
    </div>
);

const ProjectBox = ()=>(
    <div id='project-box'>
        {loopThroughProjects()}
    </div>
);
const TaskBox =(projectId)=> (
  <div className='container' id='task-box'>
    {tasksInTaskBox(projectId)}
  </div>
);

const taskCard = (task)=>{
    return (
    <div className='task-card' id={task.taskId}>
      <div className='task-options status-option'><img src={taskStatus(task.status)} /></div>
      <div className='task-card-title'>{task.title}</div>
      <div className='task-card-status'>{task.status}</div>
      <div className='task-card-dueDate'>{task.dueDate}</div>
      <div className='task-card-priority'>{task.priority}</div>
      <div className=' task-options delete-option'><img src='../assets/delete-button.svg'/></div>
    </div>
  )
};

function taskStatus(status){
  if(status){
    return('../assets/tick.svg');
  }else if(!status){
    return('../assets/cross.svg');
  }
}
const HomeView = (
  <div className='view-table' id='default-project'>
    <table>
      <tr>
        <th>Col 1</th>
        <th>Col 2</th>
      </tr>
      <tr>
        <td>{projects[0].project}</td>
        <td>{projects[0].projectId}</td>
      </tr>
    </table>
  </div>
);

function projectCard(project){
  return (<li className='side-view-item view-project' id={project.projectId}>{project.project}</li>);
}
function loopThroughProjects(){
  let projectsArray = viewProjects();
  let projectsSideView = [];
  console.log(projectsArray);
  // console.log('In loop through projects function: '+projectsSideView[i]);
  for(let i=0;i<projectsArray.length;i++){
    console.log(projectsArray[i]); //side-view-item
    projectsSideView.push(projectCard(projectsArray[i]));
    console.log('In loop through projects function: '+projectsSideView[i]);
  }
  console.log('Loop through projects');
  return projectsSideView;
}
function tasksInTaskBox(projectId){
  let taskArray = viewTask(projectId);
  let taskCardProp = [];
  console.log(taskArray);
  for(let i=0;i<taskArray.length;i++){
    taskCardProp.push(taskCard(taskArray[i]));
  }
  console.log(taskCardProp);
  return taskCardProp;
}

function fillTasks(projectId){
  console.log(viewTask(projectId));
}


export { Header, TaskBox, SideView, HomeView, taskCard, createProjectBox, createTaskBox, loopThroughProjects, fillTasks, tasksInTaskBox };