import projectData from '../../helpers/data/projectData';

import utils from '../../helpers/utils';

import './projects.scss';

const displayDevProjectNames = () => {
  projectData.getDevProjects()
    .then((projects) => {
      let domStr = '<h3>Development Projects</h3><div class="project-list"><ul>';
      projects.forEach((project) => {
        domStr += `<li><button id=${project.id}>${project.title}</button></li>`;
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
        domStr += `<li><button id=${project.id}>${project.title}</button></li>`;
      });
      domStr += '</ul></div>';
      utils.printToDom('design-project-list', domStr);
    })
    .catch((err) => console.error('get projects broke', err));
};


export default { displayDevProjectNames, displayDesignProjectNames };
