import React from 'react';
import PRODUCTS from '../../constants/productLinks.js';
import './OrderSummary.css';

const styles = {
    deleteButton: {
        textAlign:'center',
        color:'#ccc',
        fontSize:'9px'
    },
    OrderSummary: {
        backgroundColor: 'white',
        border: '1px solid #eee',
        borderRadius: '5px',
        fontFamily: 'Open Sans, sans-serif'
    },
    OrderSummaryItem: {
        border: '1px solid #eee',
        fontSize: '11px',
        textAlign: 'center'
    },
    TotalBox: {
        textAlign:'center',
        height:'36px',
        fontSize:'14px',
        fontWeight:'bold',
        paddingTop:'7px'
    }
}

export default
({cartState={}, removeItem, showTable, user}) => {

    let total = 0;

    const renderItems = () => {
        const keys = Object.keys(cartState);
        return keys.map(key => {
            const [shortKey, size] = key.split('_');
            const count = cartState[key];
            const {name='', points, sizes, color} = PRODUCTS[shortKey];
            total += (+points * +count);
            return (
                <tr key={key} style={{backgroundColor:color}}>
                    <td>
                        <a href={sizes[key]} target='_blank' rel="noopener noreferrer">
                            {name}
                        </a>    
                    </td>
                    <td style={styles.OrderSummaryItem}>{size}</td>
                    <td style={styles.OrderSummaryItem}>{points}</td>
                    <td style={styles.OrderSummaryItem}>{count}</td>
                    <td style={styles.OrderSummaryItem}>{points * count}</td>
                    <td className='deleteButton'
                        style={styles.deleteButton}
                        onClick={e => removeItem(e, key)}>
                        &#x2715;
                    </td>
                </tr>
            )
        })
    }

    return (
        <div>
            {showTable &&
            <div style={styles.OrderSummary}>
                <table className="striped">
                    <thead style={{height:'24px', fontSize:'14px', color:'white',
                            backgroundColor:'#00a787', fontFamily:'Montserrat, sans-serif'}}>
                        <tr>
                            <th style={{textAlign:'center'}}>Item</th>
                            <th style={{textAlign:'center'}}>Size</th>
                            <th style={{textAlign:'center'}}>Pts</th>
                            <th style={{textAlign:'center'}}>Count</th>
                            <th style={{textAlign:'center'}}>SubTotal</th>
                            <th style={{textAlign:'center'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItems()}
                    </tbody>
                </table>

                <div style={styles.TotalBox}>
                    {total <= 150 ?
                    <div>Total Points: {total}</div>
                    :
                    <div style={{color: 'red'}}>
                        Total Points: {total} - Overage: {total-150}
                    </div>    
                }
                    
                </div>
            </div>}
        </div>
    );
};