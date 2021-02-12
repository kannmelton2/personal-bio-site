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

export default { getDevProjectsWithImages, getDesignProjectsWithImages };
