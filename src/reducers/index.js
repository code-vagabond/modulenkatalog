import { combineReducers } from 'redux';
import ModuleDetails from './data';
import ActiveModules from './active_elem';

const rootReducer = combineReducers({
  moduleDetails: ModuleDetails,
  activeModules: ActiveModules
});

export default rootReducer;

