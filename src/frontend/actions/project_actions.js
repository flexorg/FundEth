import * as ProjectUtil from '../util/projectUtil';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_ONE_PROJECT = "RECEIVE_ONE_PROJECT";

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveOneProject = project => ({
  type: RECEIVE_ONE_PROJECT,
  project
});

export const requestProjects = (instance, account) => dispatch => (
  ProjectUtil.getProjects(instance, account)
  .then(projects => dispatch(receiveProjects(projects)))
);

export const requestProject = (id, instance) => dispatch => (
  ProjectUtil.getProject(id, instance)
  .then(project => dispatch(receiveOneProject(project)))
);
