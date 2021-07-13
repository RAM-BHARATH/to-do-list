import tasks from "./Task";

function createElement(tagName, attrs = {}, ...children) {
  if (tagName === 'fragment') return children;
  const elem = Object.assign(document.createElement(tagName), attrs)
  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child);
    else elem.append(child);
  }
  return elem;
}

const Header = (
  <div id='header'>
    <h1>ToDo List 2</h1>
  </div>
);

const TaskView = (
  <div id='task-container'>
    <table>
      <tr>
        <th>Col 1</th>
        <th>Col 2</th>
      </tr>
      <tr>
        <td>{tasks[0].description}</td>
        <td>{tasks[0].priority}</td>
      </tr>
    </table>
  </div>
);

export { Header, TaskView };