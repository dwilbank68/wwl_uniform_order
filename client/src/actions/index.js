import axios from 'axios';
import {FETCH_ORDERS, FETCH_USER, MARK_ORDER, SUBMIT_ORDER} from './types.js';

export const fetchOrders = (isAdmin) => async (dispatch, getState) => {
    let orders = [];
    if (isAdmin) {
        orders = await axios.get('/api/allorders');
    } else {
        orders = await axios.get('/api/orders');
    }
    dispatch({type: FETCH_ORDERS, payload: orders.data})
}

export const fetchUser = () => async (dispatch, getState) => {
    const user = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: user.data})
}

export const markOrder = (orderId) => async (dispatch, getState) => {
    const user = await axios.patch(`/api/orders/${orderId}`);
    dispatch({type: MARK_ORDER, payload: user.data})
}

// export const submitSurvey = (values, history) => async dispatch => {
//     const res = await axios.post('/api/surveys', values);
//     // return { type: 'SUBMIT_SURVEY' }
//     history.push('/surveys');
//     dispatch({ type: FETCH_USER, payload: res.data });
// }

export const submitOrder = (values, history) => async dispatch => {
    const res = await axios.post('/api/orders', values);
    history.push('/orders');
    return { type:SUBMIT_ORDER, payload:res.data }
}