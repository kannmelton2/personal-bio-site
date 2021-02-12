import smash from '../../helpers/data/smash';

import utils from '../../helpers/utils';

import './projects.scss';


const createDevProjectCards = () => {
  smash.getDevProjectsWithImages()
    .then((projects) => {
      let domStr = '<h3>Development Projects</h3>';
      projects.forEach((project) => {
        domStr += `
        <div class="projectCard">
        <header><p>${project.title.toUpperCase()}</p></header>
        <img src=${project.images[0].imageUrl}>
        <p>${project.description}</p>
        <p>${project.technologiesUsed}</p>
        <footer class="project-links">
        <a href="${project.liveSiteUrl}"><i class="fas fa-link"></i></a>
        <a href="${project.githubUrl}"><i class="fab fa-github"></i></a>
        </footer>
        </div>`;
      });
      utils.printToDom('devProjects', domStr);
    })
    .catch((err) => console.error('get projects broke', err));
};

const createDesignProjectCards = () => {
  smash.getDesignProjectsWithImages()
    .then((projects) => {
      let domStr = '<h3>Design Projects<h3>';
      projects.forEach((project) => {
        domStr += `
        <div class="projectCard">
        <header><p>${project.title.toUpperCase()}</p></header>
        <img src=${project.images[0].imageUrl}>
        <p>${project.description}</p>
        <p>${project.client}</p>
        <footer class="project-type">
        <p>${project.projectType}</p>
        </footer>
        </div>`;
      });
      utils.printToDom('designProjects', domStr);
    })
    .catch((err) => console.error('get projects broke', err));
};
export default { createDevProjectCards, createDesignProjectCards };
