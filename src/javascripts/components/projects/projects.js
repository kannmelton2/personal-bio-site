import projectData from '../../helpers/data/projectData';
import projectCard from '../projectCard/projectCard';

import utils from '../../helpers/utils';

import './projects.scss';

const showProjectCard = () => {
  if (document.getElementById('project-card').classList.contains('hidden')) {
    document.getElementById('project-card').classList.remove('hidden');
  }
};

const hideProjectTitle = () => {
  if (!document.getElementById('projects-header').classList.contains('hidden')) {
    document.getElementById('projects-header').classList.add('hidden');
  }
};

const displayDevProject = (e) => {
  e.preventDefault();
  const projectId = e.target.id;
  showProjectCard();
  hideProjectTitle();
  projectCard.displaySingleDevProject(projectId);
  console.error('project id', projectId);
};

const displayDesignProject = (e) => {
  e.preventDefault();
  const projectId = e.target.id;
  showProjectCard();
  hideProjectTitle();
  console.error('design project id', projectId);
};

const displayDevProjectNames = () => {
  projectData.getDevProjects()
    .then((projects) => {
      let domStr = '<h3>Development Projects</h3><div class="project-list"><ul>';
      projects.forEach((project) => {
        domStr += `<li><button class="dev-project-name" id=${project.id}>${project.title}</button></li>`;
      });
      domStr += '</ul></div>';
      utils.printToDom('dev-project-list', domStr);
    })
    .catch((err) => console.error('get projects broke', err));
};

const displayDesignProjectNames = () => {
  projectData.getDesignProjects()
    .then((projects) => {
      let domStr = '<h3>Design Projects</h3><div class="project-list"><ul>';
      projects.forEach((project) => {
        domStr += `<li><button class="design-project-name" id=${project.id}>${project.title}</button></li>`;
      });
      domStr += '</ul></div>';
      utils.printToDom('design-project-list', domStr);
    })
    .catch((err) => console.error('get projects broke', err));
};

const events = () => {
  $('body').on('click', '.dev-project-name', displayDevProject);
  $('body').on('click', '.design-project-name', displayDesignProject);
};


export default { displayDevProjectNames, displayDesignProjectNames, events };
