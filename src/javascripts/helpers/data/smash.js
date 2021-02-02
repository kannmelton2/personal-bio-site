import imageData from './imageData';
import projectData from './projectData';

const getDevProjectsWithImages = () => new Promise((resolve, reject) => {
  projectData.getDevProjects()
    .then((devProjectsResponse) => {
      imageData.getProjectImages().then((projectImagesResponse) => {
        console.error('images', projectImagesResponse);
        const devProjectsWithImages = [];
        devProjectsResponse.forEach((singleDevProject) => {
          const devProject = { ...singleDevProject };
          const projectImages = projectImagesResponse.filter((image) => image.projectId === devProject.id);
          console.error('project Images from filter:', projectImages);
          devProject.images = projectImages;
          devProjectsWithImages.push(devProject);
        });
        console.error(devProjectsWithImages);
        resolve(devProjectsWithImages);
      });
    })
    .catch((err) => reject(err));
});

export default { getDevProjectsWithImages };
