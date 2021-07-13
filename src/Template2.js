function createElement(tagName, attrs = {}, ...children) {
  if (tagName === 'fragment') return children;
  const elem = Object.assign(document.createElement(tagName), attrs);

  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child);else elem.append(child);
  }

  return elem;
}

const header = createElement("div", {
  id: "header"
}, createElement("h1", null, "ToDo List 2"));

const navbar = () => {
  const navBlock = document.createElement('nav');
  navBlock.classList.add('navbar');
  navBlock.classList.add('navbar-expand-lg');
  navBlock.classList.add('navbar-light');
  navBlock.classList.add('bg-light');
  navBlock.innerHTML = `
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Project 1</a>
            <a class="dropdown-item" href="#">Project 2</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Add new project</a>
          </div>
        </li>
      </ul>
      
    </div>
`;
  return navBlock;
};

export { header, navbar };