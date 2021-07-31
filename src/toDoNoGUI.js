const taskLib = require('./Task');
const projectLib = require('./Project')
const prompt = require('prompt-sync')();
const date_fns = require('date-fns');
// const name = prompt("What's your name? ");
// console.log(`Hey there, ${name}`);

// const projectToBeUsed = prompt("What project do you want to view? ");

// console.log(projectLib.projects);

// let projectToBeUsedId = projectLib.searchForProject(projectToBeUsed);

// if(projectToBeUsedId === false){
//     const addChoice = prompt('The project does not exist. Do you want to add it?(Y/N)');
//     if(addChoice==='Y'||addChoice==='y'){
//         projectLib.addProject(projectToBeUsed);
//     }else{
//         console.log('Prject does not exist');
//     }
// }

// console.log(projectToBeUsedId);

// console.log(projectLib.projects);


// while(true){
//     const choice = prompt('Options 1.Look all tasks 2.Add tasks 3.Delete tasks 4.Exit ');

//     if(choice==='1'){
//         console.log(taskLib.viewTask(projectToBeUsed));
//     }else if(choice==='2'){
//         // title, description,dueDate,priority
//         const title = prompt('Task name: ');
//         const description = prompt('Description(Optional): ');
//         const dueDate = 1;
//         const priority = prompt('Priority(1-10):');
//         console.log(taskLib.addTask(projectToBeUsed,title,description,dueDate,priority));
//         console.log(taskLib.viewTask(projectToBeUsed));
//         // console.log(taskLib.tasks);
//     }else if(choice==='3'){
//         const taskId = prompt('Task Id of the task to be deleted: ');
//         console.log(taskLib.deleteTask(taskId,projectToBeUsed));
//         console.log('Task deleted');
//     }
//     if(choice==='4'){
//         break;
//     }
// }

console.log(date_fns.formatDuration({years: 2,
    months: 9,
    weeks: 1,
    days: 7,
    hours: 5,
    minutes: 9,
    seconds: 30}))

console.log(date_fns.formatDistanceToNow(new Date(2021,19,7)));
console.log(date_fns.startOfToday());
console.log(date_fns.isToday(new Date(2021,7,18,10,0)));




