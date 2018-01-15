import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import web3Reducer from './web3_reducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  web3: web3Reducer
});

export default rootReducer;
