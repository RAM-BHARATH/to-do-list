let currentProjectId = 0;
const projects = [{project:'default' ,projectId:0},{project:'p' ,projectId:1}];

currentProjectId++;
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
    return addProject(projectName);
}
function addProject(projectName){
    const newProject = new Project(projectName);
    projects.push(newProject);
    return newProject.projectId;
}

// export default projects;
module.exports = {searchForProject,addProject,projects};

