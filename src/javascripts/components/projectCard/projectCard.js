import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

import './projectCard.scss';

const hideProjectCard = () => {
  if (!document.getElementById('project-card').classList.contains('hidden')) {
    document.getElementById('project-card').classList.add('hidden');
  }
};

const showProjectTitle = () => {
  if (document.getElementById('projects-header').classList.contains('hidden')) {
    document.getElementById('projects-header').classList.remove('hidden');
  }
};

const closeProjectView = () => {
  hideProjectCard();
  showProjectTitle();
};

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

const displaySingleDevProject = (projectId) => {
  smash.getDevProjectWithImagesByProjectId(projectId)
    .then((project) => {
      const domStr = `<button class="close-project-view"><i class="far fa-long-arrow-alt-left"></i></button>
      <header>
      <img src=${project.images[0].imageUrl}>
      <p>${project.title.toUpperCase()}<p>
      </header>
      <article>
      <p>${project.description}</p>
      <p><span class="marker">Technologies Used:</span> ${project.technologiesUsed}</p>
      <p><a href="${project.githubUrl}">${project.githubUrl}</a></p>
      </article>
      `;
      utils.printToDom('project-card', domStr);
    })
    .catch((err) => console.error('get projects broke', err));
};

const displaySingleDesignProject = (projectId) => {
  smash.getDesignProjectWithImagesByProjectId(projectId)
    .then((project) => {
      const domStr = `<button class="close-project-view"><i class="far fa-long-arrow-alt-left"></i></button>
      <header>
      <img src=${project.images[0].imageUrl}>
      <p>${project.title.toUpperCase()}<p>
      </header>
      <article>
      <p>${project.description}</p>
      <p><span class="marker">Project Type:</span> ${project.projectType}</p>
      <p><span class="marker">Client:</span> ${project.client}</p>
      </article>
      `;
      utils.printToDom('project-card', domStr);
    })
    .catch((err) => console.error('get projects broke', err));
};

const projectCardEvents = () => {
  $('body').on('click', '.close-project-view', closeProjectView);
};

export default {
  createDesignProjectCards,
  createDevProjectCards,
  displaySingleDevProject,
  displaySingleDesignProject,
  projectCardEvents,
};
