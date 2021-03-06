import imageData from './imageData';
import projectData from './projectData';

const getDevProjectsWithImages = () => new Promise((resolve, reject) => {
  projectData.getDevProjects()
    .then((devProjectsResponse) => {
      imageData.getProjectImages().then((projectImagesResponse) => {
        const devProjectsWithImages = [];
        devProjectsResponse.forEach((singleDevProject) => {
          const devProject = { ...singleDevProject };
          const projectImages = projectImagesResponse.filter((image) => image.projectId === devProject.id);
          devProject.images = projectImages;
          devProjectsWithImages.push(devProject);
        });
        resolve(devProjectsWithImages);
      });
    })
    .catch((err) => reject(err));
});

const getDesignProjectsWithImages = () => new Promise((resolve, reject) => {
  projectData.getDesignProjects()
    .then((designProjectsResponse) => {
      imageData.getProjectImages().then((projectImagesResponse) => {
        const designProjectsWithImages = [];
        designProjectsResponse.forEach((singleDesignProject) => {
          const designProject = { ...singleDesignProject };
          const projectImages = projectImagesResponse.filter((image) => image.projectId === designProject.id);
          designProject.images = projectImages;
          designProjectsWithImages.push(designProject);
        });
        resolve(designProjectsWithImages);
      });
    })
    .catch((err) => reject(err));
});

const getDevProjectWithImagesByProjectId = (projectId) => new Promise((resolve, reject) => {
  projectData.getDevProjectById(projectId)
    .then((devProjectResponse) => {
      imageData.getProjectImages().then((projectImagesResponse) => {
        const devProject = devProjectResponse.data;
        devProject.id = projectId;
        const projectImages = projectImagesResponse.filter((image) => image.projectId === devProject.id);
        devProject.images = projectImages;
        resolve(devProject);
      });
    }).catch((err) => reject(err));
});

const getDesignProjectWithImagesByProjectId = (projectId) => new Promise((resolve, reject) => {
  projectData.getDesignProjectById(projectId)
    .then((devProjectResponse) => {
      imageData.getProjectImages().then((projectImagesResponse) => {
        const designProject = devProjectResponse.data;
        designProject.id = projectId;
        const projectImages = projectImagesResponse.filter((image) => image.projectId === designProject.id);
        designProject.images = projectImages;
        resolve(designProject);
      });
    }).catch((err) => reject(err));
});

export default {
  getDevProjectsWithImages,
  getDesignProjectsWithImages,
  getDevProjectWithImagesByProjectId,
  getDesignProjectWithImagesByProjectId,
};
