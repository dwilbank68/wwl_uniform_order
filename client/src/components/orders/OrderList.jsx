import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchOrders, markOrder} from '../../actions/index.js';
import PRODUCTS from '../../constants/productLinks.js';
import moment from 'moment';
	
const OrderList = ({fetchOrders, markOrder, auth, orders}) => {
    
    useEffect(
        () => {if (auth) fetchOrders(auth.admin)},
        [auth, fetchOrders, orders]
    )
    
    
    const styles = {
        orderListContainer: {marginTop: '100px', padding:'0 80px'},
        row: {display:'flex', fontFamily: 'Open Sans, sans-serif', borderBottom:'1px solid gray', justifyContent:'space-between', alignItems:'center'},
        rowItem: {display:'flex', fontFamily: 'Open Sans, sans-serif'},
        namebox: {
            fontSize:'12px',
            fontFamily: 'Open Sans, sans-serif',
            paddingRight: '30px',
            textAlign:'left'
        },
        date: {fontSize:'9px'},
        detailbox: {fontSize:'12px', textAlign:'center', margin:'0 5px', color:'inherit'},
        toggleOrderButton: {fontSize:'10px', textAlign:'center', color:'inherit', display:'flex'}
    }

    const renderOrder = () => {
        return orders.map((order,i) => {
            const items = [];
            for (const key in order.items) {
                items.push([key, order.items[key]])
            }
            return (
                <div    style={order.processed ? {...styles.row, color:'#ddd'} : styles.row}
                        key={i}>
                    <div style={styles.namebox}>
                        <div>{order.name}</div>
                        <div style={styles.date}>
                            {moment(order.dateOrdered).format('YYYY-MM-DD, h:mma')}
                        </div>
                    </div>
                    <div>
                        {items.map((itemArr, i) => {
                            const [itemSize, count] = itemArr;
                            const [item, size] = itemSize.split('_');
                            return (
                                <div style={styles.rowItem} key={i}>
                                    <a  href={PRODUCTS[item].sizes[itemSize]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.detailbox}>
                                        {PRODUCTS[item].name}
                                    </a>
                                    <div style={styles.detailbox}>{size}</div>
                                    <div style={styles.detailbox}>({count})</div>
                                </div>
                                
                            )
                        })}
                    </div>
                    <div>
                        <div    onClick={() => {markOrder(order._id)}}
                                style={styles.toggleOrderButton}>
                            Mark As {order.processed ? 'UnOrdered':'Ordered'}
                        </div>
                    </div>
                </div>
            )
        }

        )
    }


    return (
        <div style={styles.orderListContainer}>
            {renderOrder()}
        </div>
    );
    
}

const mapStateToProps = ({auth, orders}) => ({
    auth,
    orders
});
	
export default connect(mapStateToProps, {fetchOrders, markOrder})(OrderList);