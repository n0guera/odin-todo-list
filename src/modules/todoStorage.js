const todoStorage = (() => {
  const projects = [];

  const projectFactory = (projectName, tasks) => ({ projectName, tasks });

  const storeNewProject = (projectName) => {
    const newProject = projectFactory(projectName, []);
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { storeNewProject, projects };
})();

export default todoStorage;
