const todoStorage = (() => {
  const projects = [];

  const projectFactory = (projectName, tasks) => ({ projectName, tasks });

  const getProjectList = () => JSON.parse(localStorage.getItem('projects'));

  const updateProjectList = () => {
    projects.push(getProjectList());
  };

  const storeNewProject = (projectName) => {
    updateProjectList();
    const newProject = projectFactory(projectName, []);
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { projects, storeNewProject, getProjectList, updateProjectList };
})();

export default todoStorage;
