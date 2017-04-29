import { combineReducers } from 'redux';
import ModuleDetails from './data';
import SelectedModules from './selected_modules';
import TestStudent from './student';

const rootReducer = combineReducers({
  moduleDetails: ModuleDetails,
  selectedModules: SelectedModules,
  student: TestStudent,
});

export default rootReducer;

