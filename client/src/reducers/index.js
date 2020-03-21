import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer.js';
import surveysReducer from './surveysReducer.js';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    surveys: surveysReducer
})