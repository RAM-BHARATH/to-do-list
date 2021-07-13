import { Header} from './Template';
import {Navbar} from './TemplateForBootstrap';
import tasks from './Task';
import { TaskView } from './Template';

const content = document.getElementById('content');

content.appendChild(Header);
content.appendChild(Navbar());
content.appendChild(TaskView);