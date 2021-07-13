const taskLib = require('./Task');
const projectLib = require('./Project')
const prompt = require('prompt-sync')();
const name = prompt("What's your name? ");
console.log(`Hey there, ${name}`);

const projectToBeUsed = prompt("What project do you want to view? ");

console.log(projectLib.projects);

let projectToBeUsedId = projectLib.searchForProject(projectToBeUsed);

console.log(projectToBeUsedId);

console.log(projectLib.projects);

// console.log(projectLib.projects[1].project);
while(true){
    const choice = prompt('Options 1.Look all tasks 2.Add tasks 3.Delete tasks 4.Exit ');

    if(choice==='1'){
        console.log(taskLib.viewTask(projectToBeUsed));
    }else if(choice==='2'){
        // title, description,dueDate,priority
        const title = prompt('Task name: ');
        const description = prompt('Description(Optional): ');
        const dueDate = 1;
        const priority = prompt('Priority(1-10):');
        console.log(taskLib.addTask(projectToBeUsed,title,description,dueDate,priority));
        console.log(taskLib.viewTask(projectToBeUsed));
        // console.log(taskLib.tasks);
    }else if(choice==='3'){
        
    }
    if(choice==='4'){
        break;
    }
}






