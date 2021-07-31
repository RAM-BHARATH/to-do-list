
let taskId = 3;
const tasks = [{project:'p',projectId:1,title:'tkfjsfskffkkkfkjfkjkejreajrraerrkjerjkajkrkjrrjar',taskId:0,description:'d',dueDate:1,priority:1,status:1},
                {project:'default',projectId:0,title:'t1',taskId:1,description:'d',dueDate:1,priority:1,status:1},
                {project:'default',projectId:0,title:'t2',taskId:2,description:'d',dueDate:1,priority:1,status:0}];
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
module.exports = {tasks, addTask, viewTask, deleteTask, deleteAllTasksInProject,findTaskIndex,toggleTaskStatus}