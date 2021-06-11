import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjectImages = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projectImages.json`)
    .then((response) => {
      const allProjectImages = response.data;
      const projectImages = [];
      if (allProjectImages) {
        Object.keys(allProjectImages).forEach((projectImageId) => {
          allProjectImages[projectImageId].id = projectImageId;
          projectImages.push(allProjectImages[projectImageId]);
        });
      }
      resolve(projectImages);
    })
    .catch((err) => reject(err));
});

const getImagesByProjectId = (projectId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projectImages.json?orderBy="projectId"&equalTo="${projectId}"`)
    .then((response) => {
      const allProjectImages = response.data;
      const projectImages = [];
      if (allProjectImages) {
        Object.keys(allProjectImages).forEach((projectImageId) => {
          allProjectImages[projectImageId].id = projectImageId;
          projectImages.push(allProjectImages[projectImageId]);
        });
      }
      resolve(projectImages);
    })
    .catch((err) => reject(err));
});

export default { getProjectImages, getImagesByProjectId };
