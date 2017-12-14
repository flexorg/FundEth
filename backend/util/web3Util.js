import App from '../../app/javascripts/app';



// Error handling is done completely on the front end
// Returning true or false is just for good measure
export const createProject = (name, description, imageUrl) => {
  App.createProject(name, description, imageUrl);
};

export const getProjects = () => {
  let projects = {};
  for (var i = 1; i < 100; i++) {
    App.getProject(i);
    if (window.projects[i]) {
      projects[i] = window.projects[i];
    }
  }

  return projects;
};

export const getProject = (id) => {
  let project = {};

  var test = App.getProject(id);
  if (window.projects[id]) {
    project[id] = window.projects[id];
  }

  return project;
};

export const donateProject = (id) => {

};
