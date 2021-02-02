import smash from '../../helpers/data/smash';

import utils from '../../helpers/utils';

import './projects.scss';


const createProjectCards = () => {
  smash.getDevProjectsWithImages()
    .then((projects) => {
      let domStr = '';
      projects.forEach((project) => {
        domStr += `
        <div class="projectCard">
        <header><h3>${project.title.toUpperCase()}</h3></header>
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

export default { createProjectCards };
