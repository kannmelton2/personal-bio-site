import projects from './components/projects/projects';
import technologies from './components/technologies/technologies';

import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  projects.createDevProjectCards();
  projects.createDesignProjectCards();
  technologies.printTechnologies();
};

init();
