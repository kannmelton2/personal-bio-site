import projects from './components/projects/projects';
import technologies from './components/technologies/technologies';

import 'bootstrap';
import '../styles/main.scss';
import projectCard from './components/projectCard/projectCard';


const init = () => {
  projects.displayDevProjectNames();
  projects.displayDesignProjectNames();
  projects.projectEvents();
  projectCard.projectCardEvents();
  technologies.printTechnologies();
};

init();
