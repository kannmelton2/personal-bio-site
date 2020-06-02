import projectData from '../../helpers/data/projectData';

import utils from '../../helpers/utils';


const createProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domStr = '<h2>Projects</h2>';
      projects.forEach((project) => {
        domStr += `
        <div class="projectCard">
        <header><h3>${project.title.toUpperCase()}</h3></header>
        <img src=${project.screenshot}>
        <p>${project.description}</p>
        <p>${project.technologiesUsed}</p>
        <footer class="project-links">
        <a href="${project.url}"><i class="fas fa-link"></i></a>
        <a href="${project.githubUrl}"><i class="fab fa-github"></i></a>
        </footer>
        </div>`;
      });
      utils.printToDom('projectsPage', domStr);
    })
    .catch((err) => console.error('get projects broke', err));
};

export default { createProjectCards };
