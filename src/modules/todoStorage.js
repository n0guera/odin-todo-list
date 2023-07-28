const todoStorage = (() => {
  let projects = [];
  let notes = [];

  const projectFactory = (projectName, tasks) => ({ projectName, tasks });
  const taskFactory = (taskName, taskDesc) => ({ taskName, taskDesc });
  const noteFactory = (noteName, noteDesc) => ({ noteName, noteDesc });

  const getProjectList = () =>
    JSON.parse(localStorage.getItem('projects')) || [];

  const getNotesList = () => JSON.parse(localStorage.getItem('notes')) || [];

  const updateProjectList = () => {
    projects = getProjectList();
  };

  const updateNoteList = () => {
    notes = getNotesList;
  };

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

  const storeNewTask = (taskName, desc) => {
    const newTask = taskFactory(taskName, desc);
    this.tasks.push(newTask);
  };

  return {
    projects,
    notes,
    storeNewProject,
    storeNewNote,
    storeNewTask,
    getProjectList,
    getNotesList,
    updateProjectList,
    updateNoteList,
  };
})();

export default todoStorage;
