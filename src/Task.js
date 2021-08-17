let tasks = [
                {project:'default',projectId:0,title:'t1',taskId:0,description:'d',dueDate:1,priority:1,status:1},
                {project:'default',projectId:0,title:'t2',taskId:1,description:'d',dueDate:1,priority:1,status:0}
            ];
let taskId = 2;
function Task (project,projectId,title, description,dueDate,priority,status){
    this.project = project,
    this.projectId = projectId,
    this.title = title,
    this.taskId = taskId,
    this.description = description,
    this.dueDate = dueDate,
    this.priority = priority,
    this.status = status,
    taskId++;
    return;
}
if(JSON.parse(localStorage.getItem('tasksInStorage'))==null){
    localStorage.setItem('tasksInStorage',JSON.stringify(tasks));
    taskId = tasks[tasks.length-1].taskId;
    taskId++;
    console.log(1+": Task item not available so far");
  }
else{
    tasks = JSON.parse(localStorage.getItem('tasksInStorage'));
    taskId = tasks[tasks.length-1].taskId;
    taskId++;
    console.log(2+": We have task item already!");
    
}

function addTask(project,projectId,title, description,dueDate,priority,status){
    const newTask = new Task(project,projectId,title, description,dueDate,priority,status);
    tasks.push(newTask);
    return newTask.taskId;
}

function viewTask(projectId){
    let taskList = [];
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].projectId==projectId){
            taskList.push(tasks[i]);
        }
    }
    return taskList;
}

function deleteTask(taskId,projectId){
    let taskIndex = findTaskIndex(taskId);
    tasks.splice(taskIndex,1);
    return viewTask(projectId);
}

function findTaskIndex(taskId){
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].taskId==taskId){
            return i;
        }
    }
}

function toggleTaskStatus(taskId){
    let index = findTaskIndex(taskId);
    tasks[index].status =  Number(!(tasks[index].status));
    return;
}

//TODO
function deleteAllTasksInProject(projectId){
    // for(let i=0;i<)
}
// export default tasks;
function updateTasksInStorage(){
    localStorage.setItem('tasksInStorage',JSON.stringify(tasks));
    return;
}
module.exports = {tasks,updateTasksInStorage, addTask, viewTask, deleteTask, deleteAllTasksInProject,findTaskIndex,toggleTaskStatus}