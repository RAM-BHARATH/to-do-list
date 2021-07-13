// const header = () =>{
//     const head = document.createElement('div');
//     head.id = 'header';
//     const heading = document.createElement('h1');
//     heading.innerText = 'ToDo List';
//     head.appendChild(heading);
//     return head;
// }

const Navbar = () =>{
    const navBlock = document.createElement('nav');
    navBlock.classList.add('navbar','navbar-expand-lg','navbar-light','bg-light');

    const navbarBrand = document.createElement('a');
    navbarBrand.href = "#";
    navbarBrand.classList.add('navbar-brand');
    navbarBrand.innerText = 'Navbar 2';

    const togglerButton = document.createElement('button');
    togglerButton.classList.add('navbar-toggler');
    togglerButton.type = "button";
    togglerButton.setAttribute('data-toggle',"collapse");
    togglerButton.setAttribute("data-target","#navbarSupportedContent");
    togglerButton.setAttribute("aria-controls","navbarSupportedContent");
    togglerButton.setAttribute("aria-expanded","false");
    togglerButton.setAttribute("aria-label","Toggle navigation");
    const spanInButton = document.createElement('span');
    spanInButton.classList.add("navbar-toggler-icon");
    togglerButton.appendChild(spanInButton);

    const navbarSupportedContent = document.createElement('div');
    navbarSupportedContent.classList.add("collapse","navbar-collapse");
    navbarSupportedContent.id = 'navbarSupportedContent';

      const ulInNavSupContent = document.createElement('ul');
      ulInNavSupContent.classList.add("navbar-nav","mr-auto");

        const li1 = document.createElement('li');
        li1.classList.add("nav-item","active");
        const aInLi1 = document.createElement('a');
        aInLi1.classList.add('nav-link');
        aInLi1.href='#';
        aInLi1.innerText = 'Home';
        const spanIna1 = document.createElement('span');
        spanIna1.classList.add('sr-only');
        spanIna1.innerText = '(current)';
        aInLi1.appendChild(spanIna1);
        li1.appendChild(aInLi1);

        const li2 = document.createElement('li');
        li2.classList.add("nav-item","dropdown");
        const aInLi2 = document.createElement('a');
        aInLi2.classList.add('nav-link','dropdown-toggle');
        aInLi2.href='#';
        aInLi2.id="navbarDropdown";
        aInLi2.setAttribute("role","button");
        aInLi2.setAttribute("data-toggle","dropdown");
        aInLi2.setAttribute("aria-haspopup","true");
        aInLi2.setAttribute("aria-expanded","false");
        aInLi2.innerText = 'Projects';
        li2.appendChild(aInLi2);

        const divInli2 = document.createElement('div');
        divInli2.classList.add('dropdown-menu');
        divInli2.setAttribute('aria-labelledby','navbarDropdown');

        const a2inLi2 = document.createElement('a');
        a2inLi2.classList.add('dropdown-item'); 
        a2inLi2.href = '#'; 
        a2inLi2.innerText = 'Project 1';
        divInli2.appendChild(a2inLi2);
        li2.appendChild(divInli2);

      const li3 = document.createElement('li');
      li3.classList.add("nav-item","active");
      const aInLi3 = document.createElement('a');
      aInLi3.classList.add('nav-link');
      aInLi3.href='#';
      aInLi3.innerText = 'Task view';
      li3.appendChild(aInLi3);

      ulInNavSupContent.appendChild(li1);
      ulInNavSupContent.appendChild(li2);
      ulInNavSupContent.appendChild(li3);
    navbarSupportedContent.appendChild(ulInNavSupContent);

    

    navBlock.appendChild(navbarBrand);
    navBlock.appendChild(togglerButton);
    navBlock.appendChild(navbarSupportedContent);
//     navBlock.innerHTML = `
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
  
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav mr-auto">
//         <li class="nav-item active">
//           <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             Projects
//           </a>
//           <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <a class="dropdown-item" href="#">Project 1</a>
//             <a class="dropdown-item" href="#">Project 2</a>
//             <div class="dropdown-divider"></div>
//             <a class="dropdown-item" href="#">Add new project</a>
//           </div>
//         </li>
//       </ul>
      
//     </div>
// `
    
  return navBlock;
}
export { Navbar };