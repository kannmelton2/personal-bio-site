import technologiesData from '../../helpers/data/technologiesData';

import utils from '../../helpers/utils';

import './technologies.scss';

const printTechnologies = () => {
  let domStr = '<h2>Technologies</h2>';
  technologiesData.getTechnologies()
    .then((technologies) => {
      technologies.forEach((technology) => {
        domStr += `<img class="tech-icons" src="${technology.icon}" alt="${technology.altText}">`;
      });
      utils.printToDom('technologiesPage', domStr);
    })
    .catch((err) => console.error('could not get technologies', err));
};

export default { printTechnologies };
