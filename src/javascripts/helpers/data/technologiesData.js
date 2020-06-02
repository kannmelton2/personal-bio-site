import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const allTechnolgies = response.data;
      const technologies = [];
      if (allTechnolgies) {
        Object.keys(allTechnolgies).forEach((technology) => {
          const newTech = allTechnolgies[technology];
          newTech.id = technology;
          technologies.push(newTech);
        });
      }
      resolve(technologies);
    })
    .catch((err) => reject(err));
});

export default { getTechnologies };
