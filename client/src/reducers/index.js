import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer.js';
import ordersReducer from './ordersReducer.js';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    orders: ordersReducer
})