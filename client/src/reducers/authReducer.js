import {FETCH_USER} from '../actions/types.js';
	
let INITIAL_STATE = null;
	
export default (state=INITIAL_STATE, action) => {

    switch(action.type){
        case FETCH_USER: return action.payload || false;
        // payload is either user obj or ''. We want false instead.
        default: return state;
    };
};
	

	
	
////////// paste this in index.js - $REDUCER$ //////////////
	
// import $REDUCER_NAME$ from './$FILENAME$';
	
// $STATE_PIECE$: $REDUCER_NAME$
	
//////////// paste this in test ///////////////
	
// var expect = require("expect");
// var df = require('deep-freeze-strict');
	
// var reducers = require("reducers");
	
// describe('$REDUCER_NAME$', () => {
//    it('should ', () => {
//        var action = {
//            type: DO_IT
//        }
//        var res = reducers.$REDUCER_NAME$(df(), df(action));
//        expect(res).toEqual();
//    });
// });
	
	
// to return an object when action.payload is an array,
// return _.mapKeys(action.payload.data, 'id');