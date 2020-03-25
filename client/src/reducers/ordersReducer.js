import {FETCH_ORDERS} from '../actions/types.js';

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {

    switch(action.type){
        case FETCH_ORDERS: return action.payload;
        // payload is either user obj or ''. We want false instead.
        default: return state;
    };
};