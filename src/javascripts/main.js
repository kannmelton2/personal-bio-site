import projects from './components/projects/projects';
import technologies from './components/technologies/technologies';

import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  projects.displayDevProjectNames();
  projects.displayDesignProjectNames();
  projects.events();
  technologies.printTechnologies();
};

init();
