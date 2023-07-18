const todoStorage = (() => {
  const projects = [];

  const projectFactory = (projectName, tasks) => ({ projectName, tasks });

  const storeNewProject = (projectName) => {
    const newProject = projectFactory(projectName, []);
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const getProjectList = () => {
    const projectList = JSON.parse(localStorage.getItem('projects'));
    return projectList;
  };

  return { projects, storeNewProject, getProjectList };
})();

export default todoStorage;
