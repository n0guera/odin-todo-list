const todoStorage = (() => {
  let projects = [];
  let notes = [];

  const projectFactory = (projectName, tasks) => ({ projectName, tasks });
  const noteFactory = (noteName, noteDesc) => ({ noteName, noteDesc });
  const taskFactory = (taskName, date) => ({ taskName, date });

  const getProjectList = () =>
    JSON.parse(localStorage.getItem('projects')) || [];

  const getNoteList = () => JSON.parse(localStorage.getItem('notes')) || [];

  const getTodayTasks = () => {};

  const getWeekTasks = () => {};

  const getTaskList = (project) =>
    getProjectList().find((element) => element.projectName === project).tasks;

  const updateProjectList = () => {
    projects = getProjectList();
  };

  const updateNoteList = () => {
    notes = getNoteList();
  };

  const validateProjectName = (newProjectName) =>
    getProjectList().find(
      (element) => element.projectName === newProjectName
    ) === undefined;

  const storeNewProject = (projectName) => {
    updateProjectList();
    const newProject = projectFactory(projectName, []);
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const storeNewNote = (noteName, noteDesc) => {
    updateNoteList();
    const newNote = noteFactory(noteName, noteDesc);
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const storeNewTask = (currentProject, taskName, date) => {
    updateProjectList();
    projects
      .find((element) => element.projectName === currentProject)
      .tasks.push(taskFactory(taskName, date));
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return {
    projects,
    notes,
    storeNewProject,
    storeNewNote,
    storeNewTask,
    getProjectList,
    getNoteList,
    getTodayTasks,
    getWeekTasks,
    getTaskList,
    updateProjectList,
    updateNoteList,
    validateProjectName,
  };
})();

export default todoStorage;
