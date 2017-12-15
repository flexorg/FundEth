import {
  RECEIVE_PROJECTS,
  RECEIVE_ONE_PROJECT
} from '../actions/project_actions';
// object merge function
import merge from 'lodash/merge';

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_PROJECTS:
      newState = merge({}, action.projects);
      return newState;
    case RECEIVE_ONE_PROJECT:
      newState = merge({}, oldState);
      newState[action.project.id] = action.project;
      return newState;
    default:
      return oldState;
  }
};

export default projectsReducer;
