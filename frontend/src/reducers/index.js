import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';  
import login from "./loginReducer";
import users from "./userReducer";
import batch from './batchReducer';

const rootReducer = combineReducers({
    login,
    users,
    batch,
    form: formReducer

})

export default rootReducer;