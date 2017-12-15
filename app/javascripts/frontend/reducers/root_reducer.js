import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';

const rootReducer = combineReducers({
  projects: projectsReducer
});

export default rootReducer;
