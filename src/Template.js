import tasks from "./Task";

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
}, createElement("h1", null, "ToDo List 2"));
const TaskView = createElement("div", {
  id: "task-container"
}, createElement("table", null, createElement("tr", null, createElement("th", null, "Col 1"), createElement("th", null, "Col 2")), createElement("tr", null, createElement("td", null, tasks[0].description), createElement("td", null, tasks[0].priority))));
export { Header, TaskView };