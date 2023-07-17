const todoStorage = (() => {
  const storeNewProject = (projectName) => {
    localStorage.setItem('projectName', projectName);
  };

  return { storeNewProject };
})();

export default todoStorage;
