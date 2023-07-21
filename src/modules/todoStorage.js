const todoStorage = (() => {
  let projects = [];

  const projectFactory = (projectName, tasks) => ({ projectName, tasks });

  const getProjectList = () =>
    JSON.parse(localStorage.getItem('projects')) || [];

  const updateProjectList = () => {
    projects = getProjectList();
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
