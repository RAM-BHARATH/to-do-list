import { addTask, viewTask, deleteTask, deleteAllTasksInProject, tasks } from "./Task";
import { searchForProject, addProject, deleteProject, viewProjects, projects } from './Project';

function createElement(tagName, attrs = {}, ...children) {
  if (tagName === 'fragment') return children;
  const elem = Object.assign(document.createElement(tagName), attrs);

  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child);else elem.append(child);
  }

  return elem;
}

const Header = createElement("div", {
  id: "header"
}, createElement("h1", null, "ToDo List 2"), createElement("div", {
  className: "menu-icon",
  id: "add-task-toggler"
}, createElement("abbr", {
  title: "Create New Task"
}, createElement("img", {
  src: "../assets/plus.svg"
}))), createElement("div", {
  className: "menu-icon",
  id: "menu-icon"
}, createElement("img", {
  src: "../assets/hamburger_icon.svg"
})));

const SideView = () => createElement("div", {
  className: "side-view",
  id: "side-view"
}, createElement("ul", {
  className: "side-view-content",
  id: "side-view-content"
}, createElement("li", {
  className: "side-view-item",
  id: "create-project-button"
}, createElement("img", {
  src: "../assets/plus.svg"
})), ProjectBox()));

const createProjectBox = createElement("div", {
  className: "create-project-box"
}, createElement("form", null, createElement("input", {
  type: "text",
  placeholder: "Project Title",
  id: "new-project-title"
}), createElement("div", {
  className: "add-button",
  id: "add-project-button",
  name: "add-project-button"
}, "Add project")));
const createTaskBox = createElement("div", {
  className: "create-task-box"
}, createElement("form", null, createElement("input", {
  type: "text",
  placeholder: "Task title",
  name: "new-task-name",
  id: "new-task-name",
  value: "",
  required: true
}), createElement("input", {
  type: "text",
  placeholder: "Task description",
  name: "new-task-description",
  id: "new-task-description",
  max: "200",
  value: "",
  required: true
}), createElement("div", null, createElement("label", {
  for: "priority"
}, "Priority "), createElement("select", {
  placeholder: "Priority",
  name: "new-task-priority",
  id: "new-task-priority",
  required: true
}, createElement("option", {
  value: "0"
}, "Low"), createElement("option", {
  value: "1"
}, "Medium"), createElement("option", {
  value: "2"
}, "High"))), createElement("input", {
  type: "date",
  name: "new-task-date",
  id: "new-task-date",
  required: true
}), createElement("div", null, createElement("label", null, "Status"), createElement("input", {
  type: "checkbox",
  style: "width:fit-content",
  name: "new-task-status",
  id: "new-task-status"
})), createElement("div", {
  type: "submit",
  className: "add-button",
  id: "add-task-button",
  name: "add-task-button"
}, "Add task")));

const ProjectBox = () => createElement("div", {
  id: "project-box"
}, loopThroughProjects());

const TaskBox = projectId => createElement("div", {
  className: "container",
  id: "task-box"
}, tasksInTaskBox(projectId));

const taskCard = task => {
  return createElement("div", {
    className: "task-card",
    id: task.taskId
  }, createElement("div", {
    className: "task-options status-option"
  }, createElement("img", {
    src: taskStatus(task.status)
  })), createElement("div", {
    className: "task-card-title"
  }, task.title), createElement("div", {
    className: "task-card-status"
  }, task.status), createElement("div", {
    className: "task-card-dueDate"
  }, task.dueDate), createElement("div", {
    className: "task-card-priority"
  }, task.priority), createElement("div", {
    className: " task-options delete-option"
  }, createElement("img", {
    src: "../assets/delete-button.svg"
  })));
};

function taskStatus(status) {
  if (status) {
    return '../assets/tick.svg';
  } else if (!status) {
    return '../assets/cross.svg';
  }
}

const HomeView = createElement("div", {
  className: "view-table",
  id: "default-project"
}, createElement("table", null, createElement("tr", null, createElement("th", null, "Col 1"), createElement("th", null, "Col 2")), createElement("tr", null, createElement("td", null, projects[0].project), createElement("td", null, projects[0].projectId))));

function projectCard(project) {
  return createElement("li", {
    className: "side-view-item view-project",
    id: project.projectId
  }, project.project);
}

function loopThroughProjects() {
  let projectsArray = viewProjects();
  let projectsSideView = [];
  console.log(projectsArray);

  for (let i = 0; i < projectsArray.length; i++) {
    console.log(projectsArray[i]);
    projectsSideView.push(projectCard(projectsArray[i]));
    console.log('In loop through projects function: ' + projectsSideView[i]);
  }

  console.log('Loop through projects');
  return projectsSideView;
}

function tasksInTaskBox(projectId) {
  let taskArray = viewTask(projectId);
  let taskCardProp = [];
  console.log(taskArray);

  for (let i = 0; i < taskArray.length; i++) {
    taskCardProp.push(taskCard(taskArray[i]));
  }

  console.log(taskCardProp);
  return taskCardProp;
}

function fillTasks(projectId) {
  console.log(viewTask(projectId));
}

export { Header, TaskBox, SideView, HomeView, taskCard, createProjectBox, createTaskBox, loopThroughProjects, fillTasks, tasksInTaskBox };