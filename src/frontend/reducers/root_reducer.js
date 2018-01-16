import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import web3Reducer from './web3_reducer';
import accountsReducer from './accounts_reducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  web3: web3Reducer,
  accounts: accountsReducer
});

export default rootReducer;
