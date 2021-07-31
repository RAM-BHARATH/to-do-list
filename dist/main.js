/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var taskLib = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\nvar currentProjectId = 2;\nvar projects = [{\n  project: 'default',\n  projectId: 0\n}, {\n  project: 'p',\n  projectId: 1\n}];\n\nfunction Project(projectName) {\n  this.project = projectName;\n  this.projectId = currentProjectId;\n  currentProjectId++;\n}\n\nfunction searchForProject(projectName) {\n  for (var i = 0; i < projects.length; i++) {\n    if (projects[i].project === projectName) {\n      return projects[i].projectId;\n    }\n  }\n\n  return false;\n}\n\nfunction addProject(projectName) {\n  var newProject = new Project(projectName);\n  projects.push(newProject);\n  console.log('Projects length - After adding:' + projects.length);\n  console.log(projects);\n  return projects;\n}\n\nfunction deleteProject(projectName, projectId) {\n  taskLib.deleteAllTasksInProject(projectName);\n  console.log('All tasks in deleted...');\n  projects.splice(projectId, 1);\n  console.log('Project Deleted');\n  return projects;\n}\n\nfunction viewProjects() {\n  return projects;\n}\n\nmodule.exports = {\n  searchForProject: searchForProject,\n  addProject: addProject,\n  deleteProject: deleteProject,\n  viewProjects: viewProjects,\n  projects: projects\n};\n\n//# sourceURL=webpack://toDoList/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((module) => {

eval("var taskId = 3;\nvar tasks = [{\n  project: 'p',\n  projectId: 1,\n  title: 'tkfjsfskffkkkfkjfkjkejreajrraerrkjerjkajkrkjrrjar',\n  taskId: 0,\n  description: 'd',\n  dueDate: 1,\n  priority: 1,\n  status: 1\n}, {\n  project: 'default',\n  projectId: 0,\n  title: 't1',\n  taskId: 1,\n  description: 'd',\n  dueDate: 1,\n  priority: 1,\n  status: 1\n}, {\n  project: 'default',\n  projectId: 0,\n  title: 't2',\n  taskId: 2,\n  description: 'd',\n  dueDate: 1,\n  priority: 1,\n  status: 0\n}];\n\nfunction Task(project, projectId, title, description, dueDate, priority, status) {\n  this.project = project, this.projectId = projectId, this.title = title, this.taskId = taskId, this.description = description, this.dueDate = dueDate, this.priority = priority, this.status = status, taskId++;\n}\n\nfunction addTask(project, projectId, title, description, dueDate, priority, status) {\n  var newTask = new Task(project, projectId, title, description, dueDate, priority, status);\n  tasks.push(newTask);\n  return newTask.taskId;\n}\n\nfunction viewTask(projectId) {\n  var taskList = [];\n\n  for (var i = 0; i < tasks.length; i++) {\n    if (tasks[i].projectId == projectId) {\n      taskList.push(tasks[i]);\n    }\n  }\n\n  return taskList;\n}\n\nfunction deleteTask(taskId, projectId) {\n  var taskIndex = findTaskIndex(taskId);\n  tasks.splice(taskIndex, 1);\n  return viewTask(projectId);\n}\n\nfunction findTaskIndex(taskId) {\n  for (var i = 0; i < tasks.length; i++) {\n    if (tasks[i].taskId == taskId) {\n      return i;\n    }\n  }\n}\n\nfunction toggleTaskStatus(taskId) {\n  var index = findTaskIndex(taskId);\n  tasks[index].status = Number(!tasks[index].status);\n  return;\n}\n\nfunction deleteAllTasksInProject(projectId) {}\n\nmodule.exports = {\n  tasks: tasks,\n  addTask: addTask,\n  viewTask: viewTask,\n  deleteTask: deleteTask,\n  deleteAllTasksInProject: deleteAllTasksInProject,\n  findTaskIndex: findTaskIndex,\n  toggleTaskStatus: toggleTaskStatus\n};\n\n//# sourceURL=webpack://toDoList/./src/Task.js?");

/***/ }),

/***/ "./src/Template.js":
/*!*************************!*\
  !*** ./src/Template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header),\n/* harmony export */   \"TaskBox\": () => (/* binding */ TaskBox),\n/* harmony export */   \"SideView\": () => (/* binding */ SideView),\n/* harmony export */   \"HomeView\": () => (/* binding */ HomeView),\n/* harmony export */   \"taskCard\": () => (/* binding */ taskCard),\n/* harmony export */   \"createProjectBox\": () => (/* binding */ createProjectBox),\n/* harmony export */   \"createTaskBox\": () => (/* binding */ createTaskBox),\n/* harmony export */   \"loopThroughProjects\": () => (/* binding */ loopThroughProjects),\n/* harmony export */   \"fillTasks\": () => (/* binding */ fillTasks),\n/* harmony export */   \"tasksInTaskBox\": () => (/* binding */ tasksInTaskBox)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Task__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Project__WEBPACK_IMPORTED_MODULE_1__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nfunction createElement(tagName) {\n  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  if (tagName === 'fragment') return children;\n  var elem = Object.assign(document.createElement(tagName), attrs);\n\n  for (var _i = 0, _children = children; _i < _children.length; _i++) {\n    var child = _children[_i];\n    if (Array.isArray(child)) elem.append.apply(elem, _toConsumableArray(child));else elem.append(child);\n  }\n\n  return elem;\n}\n\nvar Header = createElement(\"div\", {\n  id: \"header\"\n}, createElement(\"h1\", null, \"ToDo List 2\"), createElement(\"div\", {\n  className: \"menu-icon\",\n  id: \"add-task-toggler\"\n}, createElement(\"abbr\", {\n  title: \"Create New Task\"\n}, createElement(\"img\", {\n  src: \"../assets/plus.svg\"\n}))), createElement(\"div\", {\n  className: \"menu-icon\",\n  id: \"menu-icon\"\n}, createElement(\"img\", {\n  src: \"../assets/hamburger_icon.svg\"\n})));\n\nvar SideView = function SideView() {\n  return createElement(\"div\", {\n    className: \"side-view\",\n    id: \"side-view\"\n  }, createElement(\"ul\", {\n    className: \"side-view-content\",\n    id: \"side-view-content\"\n  }, createElement(\"li\", {\n    className: \"side-view-item\",\n    id: \"create-project-button\"\n  }, createElement(\"img\", {\n    src: \"../assets/plus.svg\"\n  })), ProjectBox()));\n};\n\nvar createProjectBox = createElement(\"div\", {\n  className: \"create-project-box\"\n}, createElement(\"form\", null, createElement(\"input\", {\n  type: \"text\",\n  placeholder: \"Project Title\",\n  id: \"new-project-title\"\n}), createElement(\"div\", {\n  className: \"add-button\",\n  id: \"add-project-button\",\n  name: \"add-project-button\"\n}, \"Add project\")));\nvar createTaskBox = createElement(\"div\", {\n  className: \"create-task-box\"\n}, createElement(\"form\", null, createElement(\"input\", {\n  type: \"text\",\n  placeholder: \"Task title\",\n  name: \"new-task-name\",\n  id: \"new-task-name\",\n  value: \"\",\n  required: true\n}), createElement(\"input\", {\n  type: \"text\",\n  placeholder: \"Task description\",\n  name: \"new-task-description\",\n  id: \"new-task-description\",\n  max: \"200\",\n  value: \"\",\n  required: true\n}), createElement(\"div\", null, createElement(\"label\", {\n  \"for\": \"priority\"\n}, \"Priority \"), createElement(\"select\", {\n  placeholder: \"Priority\",\n  name: \"new-task-priority\",\n  id: \"new-task-priority\",\n  required: true\n}, createElement(\"option\", {\n  value: \"0\"\n}, \"Low\"), createElement(\"option\", {\n  value: \"1\"\n}, \"Medium\"), createElement(\"option\", {\n  value: \"2\"\n}, \"High\"))), createElement(\"input\", {\n  type: \"date\",\n  name: \"new-task-date\",\n  id: \"new-task-date\",\n  required: true\n}), createElement(\"div\", null, createElement(\"label\", null, \"Status\"), createElement(\"input\", {\n  type: \"checkbox\",\n  style: \"width:fit-content\",\n  name: \"new-task-status\",\n  id: \"new-task-status\"\n})), createElement(\"div\", {\n  type: \"submit\",\n  className: \"add-button\",\n  id: \"add-task-button\",\n  name: \"add-task-button\"\n}, \"Add task\")));\n\nvar ProjectBox = function ProjectBox() {\n  return createElement(\"div\", {\n    id: \"project-box\"\n  }, loopThroughProjects());\n};\n\nvar TaskBox = function TaskBox(projectId) {\n  return createElement(\"div\", {\n    className: \"container\",\n    id: \"task-box\"\n  }, tasksInTaskBox(projectId));\n};\n\nvar taskCard = function taskCard(task) {\n  return createElement(\"div\", {\n    className: \"task-card\",\n    id: task.taskId\n  }, createElement(\"div\", {\n    className: \"task-options status-option\"\n  }, createElement(\"img\", {\n    src: taskStatus(task.status)\n  })), createElement(\"div\", {\n    className: \"task-card-title\"\n  }, task.title), createElement(\"div\", {\n    className: \"task-card-status\"\n  }, task.status), createElement(\"div\", {\n    className: \"task-card-dueDate\"\n  }, task.dueDate), createElement(\"div\", {\n    className: \"task-card-priority\"\n  }, task.priority), createElement(\"div\", {\n    className: \" task-options delete-option\"\n  }, createElement(\"img\", {\n    src: \"../assets/delete-button.svg\"\n  })));\n};\n\nfunction taskStatus(status) {\n  if (status) {\n    return '../assets/tick.svg';\n  } else if (!status) {\n    return '../assets/cross.svg';\n  }\n}\n\nvar HomeView = createElement(\"div\", {\n  className: \"view-table\",\n  id: \"default-project\"\n}, createElement(\"table\", null, createElement(\"tr\", null, createElement(\"th\", null, \"Col 1\"), createElement(\"th\", null, \"Col 2\")), createElement(\"tr\", null, createElement(\"td\", null, _Project__WEBPACK_IMPORTED_MODULE_1__.projects[0].project), createElement(\"td\", null, _Project__WEBPACK_IMPORTED_MODULE_1__.projects[0].projectId))));\n\nfunction projectCard(project) {\n  return createElement(\"li\", {\n    className: \"side-view-item view-project\",\n    id: project.projectId\n  }, project.project);\n}\n\nfunction loopThroughProjects() {\n  var projectsArray = (0,_Project__WEBPACK_IMPORTED_MODULE_1__.viewProjects)();\n  var projectsSideView = [];\n  console.log(projectsArray);\n\n  for (var i = 0; i < projectsArray.length; i++) {\n    console.log(projectsArray[i]);\n    projectsSideView.push(projectCard(projectsArray[i]));\n    console.log('In loop through projects function: ' + projectsSideView[i]);\n  }\n\n  console.log('Loop through projects');\n  return projectsSideView;\n}\n\nfunction tasksInTaskBox(projectId) {\n  var taskArray = (0,_Task__WEBPACK_IMPORTED_MODULE_0__.viewTask)(projectId);\n  var taskCardProp = [];\n  console.log(taskArray);\n\n  for (var i = 0; i < taskArray.length; i++) {\n    taskCardProp.push(taskCard(taskArray[i]));\n  }\n\n  console.log(taskCardProp);\n  return taskCardProp;\n}\n\nfunction fillTasks(projectId) {\n  console.log((0,_Task__WEBPACK_IMPORTED_MODULE_0__.viewTask)(projectId));\n}\n\n\n\n//# sourceURL=webpack://toDoList/./src/Template.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Project__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Task__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template */ \"./src/Template.js\");\n\n\n\n\n\nvar currentProject = '';\nvar currentProjectId = 0;\nvar content = document.getElementById('content');\n\nfunction initializer() {\n  content.innerHTML = '';\n  content.appendChild(_Template__WEBPACK_IMPORTED_MODULE_2__.Header);\n  content.appendChild((0,_Template__WEBPACK_IMPORTED_MODULE_2__.SideView)());\n  content.appendChild((0,_Template__WEBPACK_IMPORTED_MODULE_2__.TaskBox)(currentProjectId));\n  content.appendChild(_Template__WEBPACK_IMPORTED_MODULE_2__.createProjectBox);\n  content.appendChild(_Template__WEBPACK_IMPORTED_MODULE_2__.createTaskBox);\n  var deleteButtonList = document.querySelectorAll('.delete-option');\n  console.log(deleteButtonList);\n\n  var _loop = function _loop(i) {\n    deleteButtonList[i].addEventListener('click', function () {\n      var taskToBeDeleted = deleteButtonList[i].parentNode.id;\n      (0,_Task__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(taskToBeDeleted, currentProjectId);\n      console.log((0,_Task__WEBPACK_IMPORTED_MODULE_1__.viewTask)(currentProjectId));\n      initializer();\n    });\n  };\n\n  for (var i = 0; i < deleteButtonList.length; i++) {\n    _loop(i);\n  }\n\n  var statusToggleButtons = document.querySelectorAll('.status-option');\n  console.log(statusToggleButtons);\n\n  var _loop2 = function _loop2(_i) {\n    statusToggleButtons[_i].addEventListener('click', function () {\n      var changeTaskStatus = statusToggleButtons[_i].parentNode.id;\n      (0,_Task__WEBPACK_IMPORTED_MODULE_1__.toggleTaskStatus)(changeTaskStatus);\n      console.log((0,_Task__WEBPACK_IMPORTED_MODULE_1__.viewTask)(currentProjectId));\n      initializer();\n    });\n  };\n\n  for (var _i = 0; _i < statusToggleButtons.length; _i++) {\n    _loop2(_i);\n  }\n\n  var projectList = document.querySelectorAll('.view-project');\n  console.log(projectList);\n\n  var _loop3 = function _loop3(_i2) {\n    console.log(projectList[_i2].id, projectList[_i2], projectList[_i2].innerText);\n\n    projectList[_i2].addEventListener('click', function () {\n      currentProject = projectList[_i2].innerText;\n      currentProjectId = projectList[_i2].id;\n      console.log(currentProjectId, currentProject, 'clicked');\n      initializer();\n    });\n  };\n\n  for (var _i2 = 0; _i2 < projectList.length; _i2++) {\n    _loop3(_i2);\n  }\n\n  var side_view = document.getElementById('side-view');\n  var menuIcon = document.getElementById('menu-icon');\n  menuIcon.addEventListener('click', toggleSideBar);\n  var createProjectButton = document.getElementById('create-project-button');\n  createProjectButton.addEventListener('click', function () {\n    toggleCreateProjectBox();\n  });\n}\n\ninitializer();\nvar menuIcon = document.getElementById('menu-icon');\nvar side_view = document.getElementById('side-view');\nvar taskCreateBoxToggler = document.getElementById('add-task-toggler');\nvar createProjectButton = document.getElementById('create-project-button');\nvar projectList = document.querySelectorAll('.view-project');\nvar addProjectButton = document.getElementById('add-project-button');\nvar addTaskButton = document.getElementById('add-task-button');\nvar title = document.getElementById('new-task-name');\nvar description = document.getElementById('new-task-description');\nvar dueDate = document.getElementById('new-task-date');\nvar priority = document.getElementById('new-task-priority');\nvar status = document.getElementById('new-task-status');\nvar projectTitle = document.getElementById('new-project-title');\naddProjectButton.addEventListener('click', function () {\n  console.log('Add project button clicked');\n\n  if (projectTitle.value != '') {\n    (0,_Project__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectTitle.value);\n    initializer();\n  }\n\n  toggleCreateProjectBox();\n});\naddTaskButton.addEventListener('click', function () {\n  console.log(\"Add task button clicked\");\n\n  if (title.value != '' && description.value != '' && dueDate.value != '') {\n    console.log(title.value, description.value, dueDate.value, priority.value, status.checked);\n    (0,_Task__WEBPACK_IMPORTED_MODULE_1__.addTask)(currentProject, currentProjectId, title.value, description.value, dueDate.value, priority.value, status.checked);\n    initializer();\n    clearCreateTaskBox();\n  }\n\n  toggleCreateTaskBox();\n});\nmenuIcon.addEventListener('click', toggleSideBar);\ntaskCreateBoxToggler.addEventListener('click', function () {\n  toggleCreateTaskBox();\n});\ncreateProjectButton.addEventListener('click', function () {\n  toggleCreateProjectBox();\n});\n\nfunction toggleCreateTaskBox() {\n  if (_Template__WEBPACK_IMPORTED_MODULE_2__.createTaskBox.style.top !== '0px') {\n    _Template__WEBPACK_IMPORTED_MODULE_2__.createTaskBox.style.top = '0px';\n  } else {\n    _Template__WEBPACK_IMPORTED_MODULE_2__.createTaskBox.style.top = '-500px';\n  }\n\n  return;\n}\n\nfunction toggleCreateProjectBox() {\n  if (_Template__WEBPACK_IMPORTED_MODULE_2__.createProjectBox.style.right === '0px') {\n    _Template__WEBPACK_IMPORTED_MODULE_2__.createProjectBox.style.right = '-500px';\n  } else {\n    _Template__WEBPACK_IMPORTED_MODULE_2__.createProjectBox.style.right = '0px';\n  }\n}\n\nfunction toggleSideBar() {\n  console.log('===' + side_view.style.right + '===' + side_view.style.top);\n\n  if (side_view.style.right == '0px') {\n    side_view.style.right = '-500px';\n  } else {\n    side_view.style.right = '0px';\n  }\n\n  console.log('Menu Button clicked');\n  return;\n}\n\nfunction clearCreateTaskBox() {\n  title.value = '';\n  description.value = '';\n  dueDate.value = '';\n  priority.value = 0;\n  status.checked = false;\n  return;\n}\n\nconsole.log(menuIcon);\nconsole.log(\"Current proejct ID: \" + currentProjectId);\n\n//# sourceURL=webpack://toDoList/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;