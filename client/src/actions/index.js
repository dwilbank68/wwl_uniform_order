import axios from 'axios';
import {FETCH_SURVEYS, FETCH_USER} from './types.js';

export const fetchSurveys = () => async (dispatch, getState) => {
    const surveys = await axios.get('/api/surveys');
    dispatch({type: FETCH_SURVEYS, payload: surveys.data})
}

export const fetchUser = () => async (dispatch, getState) => {
    const user = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: user.data})
}

export const handleToken = token => async (dispatch, getState) => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    // return { type: 'SUBMIT_SURVEY' }
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
}