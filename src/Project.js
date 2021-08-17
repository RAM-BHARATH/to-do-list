const taskLib = require('./Task');
let projects = [{project:'default' ,projectId:0}]; //,{project:'p' ,projectId:1}
let currentProjectId = 0;

if(JSON.parse(localStorage.getItem('projectsInStorage'))==null){
    localStorage.setItem('projectsInStorage',JSON.stringify(projects));
    console.log(1+": Project item not available so far");
  }
else{
    projects = JSON.parse(localStorage.getItem('projectsInStorage'));
    currentProjectId = projects[projects.length-1].projectId;
    console.log("Current project id: "+currentProjectId);
    console.log(2+": We have project item already!");
}

// currentProjectId++;
function Project(projectName){
    this.project = projectName;
    currentProjectId++;
    this.projectId = currentProjectId;
}
function searchForProject(projectName){
    for(let i=0;i<projects.length;i++){
        if(projects[i].project === projectName){
            return projects[i].projectId;
        }
    }
    // return addProject(projectName);
    return false;
}
// function
function addProject(projectName){
    const newProject = new Project(projectName);
    projects.push(newProject);
    console.log('Projects length - After adding:'+projects.length);
    console.log(projects);
    return projects;
}


function deleteProject(projectName,projectId){
    taskLib.deleteAllTasksInProject(projectName);
    console.log('All tasks in deleted...');
    projects.splice(projectId,1);
    console.log('Project Deleted');
    return projects;
}

function viewProjects(){
    return projects;
}

function updateProjectsInStorage(){
    localStorage.setItem('projectsInStorage',JSON.stringify(projects));
    return;
}
// export default projects;
module.exports = {updateProjectsInStorage, searchForProject, addProject, deleteProject,viewProjects , projects};

