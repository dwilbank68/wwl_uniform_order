import React from 'react';
import {Link} from 'react-router-dom';
import OrderList from './orders/OrderList.jsx';

const Dashboard = () => {

    const styles = {
        newOrderButton: { marginTop:'30px'}
    }

    return (
        <div    style={{textAlign: 'center'}}>
            <OrderList/>
            <div style={styles.newOrderButton}>
                <Link   to="/orders/new"
                        className="btn-floating btn-large">
                    <i className="material-icons" style={{fontSize:'50px'}}>add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;