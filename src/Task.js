
let taskId = 0;
const tasks = [{project:'p',title:'t',taskId:1,description:'d',dueDate:1,priority:1},
                {project:'p',title:'t1',taskId:2,description:'d',dueDate:1,priority:1},
                {project:'default',title:'t2',taskId:3,description:'d',dueDate:1,priority:1}];
function Task (project,title, description,dueDate,priority){
    this.project = project,
    this.title = title,
    this.taskId = taskId,
    this.description = description,
    this.dueDate = dueDate,
    this.priority = priority,
    taskId++;
}

function addTask(project,title, description,dueDate,priority){
    const newTask = new Task(project,title, description,dueDate,priority);
    tasks.push(newTask);
    return newTask.taskId;
}

function viewTask(projectName){
    let taskList = [];
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].project===projectName){
            taskList.push(tasks[i]);
        }
    }
    return taskList;
}

function deleteTask(taskId){
    
}
// export default tasks;
module.exports = {addTask, viewTask, tasks}