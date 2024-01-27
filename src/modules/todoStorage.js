import { isThisWeek, isToday, parse } from 'date-fns';

const todoStorage = (() => {
  let projects = [];
  let notes = [];

  const projectFactory = (projectName, tasks) => ({ projectName, tasks });
  const noteFactory = (noteName, noteDesc) => ({ noteName, noteDesc });
  const taskFactory = (taskName, dueDate, checked) => ({
    taskName,
    dueDate,
    checked,
  });

  const getProjectList = () =>
    JSON.parse(localStorage.getItem('projects')) || [];

  const getNoteList = () => JSON.parse(localStorage.getItem('notes')) || [];

  const getTaskList = (project) =>
    getProjectList().find((element) => element.projectName === project).tasks;

  const updateProjectList = () => {
    projects = getProjectList();
  };

  const updateNoteList = () => {
    notes = getNoteList();
  };

  const getTodayTasks = () => {
    const todayTasks = [];
    updateProjectList();
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (isToday(parse(task.dueDate, 'yyyy-MM-dd', new Date())))
          todayTasks.push(task);
      });
    });
    return todayTasks;
  };

  const getWeekTasks = () => {
    const weekTasks = [];
    updateProjectList();
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (
          isThisWeek(parse(task.dueDate, 'yyyy-MM-dd', new Date()), {
            weekStartsOn: 1,
          })
        )
          weekTasks.push(task);
      });
    });
    return weekTasks;
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

  const storeNewTask = (project, taskName, dueDate) => {
    updateProjectList();
    projects
      .find((element) => element.projectName === project)
      .tasks.push(taskFactory(taskName, dueDate, false));
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const checkTask = (projectName, taskName) => {
    updateProjectList();
    projects
      .find((element) => element.projectName === projectName)
      .tasks.find((element) => element.taskName === taskName).checked = true;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteTask = (projectName, taskName) => {
    updateProjectList();
    const projectTasks = projects.find(
      (element) => element.projectName === projectName
    ).tasks;
    for (let i = 0; i < projectTasks.length; i += 1) {
      if (projectTasks[i].taskName === taskName) projectTasks.splice(i, 1);
    }
    projects.find((element) => element.projectName === projectName).tasks =
      projectTasks;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteProject = (project) => {
    updateProjectList();
    for (let i = 0; i < projects.length; i += 1) {
      if (projects[i].projectName === project) projects.splice(i, 1);
    }
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteNote = (noteName) => {
    updateNoteList();
    for (let i = 0; i < notes.length; i += 1) {
      if (notes[i].noteName === noteName) notes.splice(i, 1);
    }
    localStorage.setItem('notes', JSON.stringify(notes));
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
    checkTask,
    deleteTask,
    deleteProject,
    deleteNote,
  };
})();

export default todoStorage;
