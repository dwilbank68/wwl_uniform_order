import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchOrders} from '../../actions/index.js';
import PRODUCTS from '../../constants/productLinks.js';

	
const OrderList = ({fetchOrders, auth, orders}) => {
    
    useEffect(
        () => {if (auth) fetchOrders(auth.admin)},
        [auth]
    )
    
    
    const styles = {
        row: {display:'flex'}
    }
    
    const renderOrder = () => {
        return orders.map((order,i) => {
            const items = [];
            for (const key in order.items) {
                items.push([key, order.items[key]])
            }
            return (
                <div style={styles.row} key={i}>
                    <div>{order.name}</div>
                    <div>
                        {items.map((itemArr, i) => {
                            const [itemSize, count] = itemArr;
                            const [item, size] = itemSize.split('_');
                            return (
                                <div style={styles.row} key={i}>
                                    <a  href={PRODUCTS[item].sizes[itemSize]}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {PRODUCTS[item].name}
                                    </a>
                                    <div>{size}</div>
                                    <div>{count}</div>
                                </div>
                                
                            )
                        })}
                    </div>
                </div>
            )
        }

        )
    }


    return (
        <div className="">
            {renderOrder()}
        </div>
    );
    
}

const mapStateToProps = ({auth, orders}) => ({
    auth,
    orders
});
	
export default connect(mapStateToProps, {fetchOrders})(OrderList);