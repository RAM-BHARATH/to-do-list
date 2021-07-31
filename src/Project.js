const taskLib = require('./Task');
let currentProjectId = 2;
const projects = [{project:'default' ,projectId:0},{project:'p' ,projectId:1}];

// currentProjectId++;
function Project(projectName){
    this.project = projectName;
    this.projectId = currentProjectId;
    currentProjectId++;
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
// export default projects;
module.exports = {searchForProject, addProject, deleteProject,viewProjects , projects};

