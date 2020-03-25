import React from 'react';
import {Link} from 'react-router-dom';
import OrderList from './orders/OrderList.jsx';

const Dashboard = () => {


    return (
        <div    style={{textAlign: 'center'}}>
            <OrderList/>
            <div className="fixed-action-btn">
                <Link   to="/orders/new"
                        className="btn-floating btn-large red">
                    <i className="material-icons" style={{fontSize:'50px'}}>add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;