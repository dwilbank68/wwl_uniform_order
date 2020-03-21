import React from 'react';
import PRODUCTS from '../../constants/productLinks.js';
// import OrderSummaryItem from './OrderSummaryItem';
import './OrderSummary.css';

const styles = {
    deleteButton: {
        textAlign:'center',
        color:'#ccc',
        hover: {
            cursor:'pointer'
        }
    },
    OrderSummaryItem: {
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '11px',
        fontFamily: 'Courier'
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
                    <td style={{textAlign:'center'}}>{size}</td>
                    <td style={{textAlign:'center'}}>{points}</td>
                    <td style={{textAlign:'center'}}>{count}</td>
                    <td style={{textAlign:'center'}}>{points * count}</td>
                    <td className='deleteButton'
                        onClick={e => removeItem(e, key)}
                        style={styles.deleteButton}>
                        &#x2715;
                    </td>
                </tr>
            )
        })
    }

    return (
        <div>
            {showTable &&
            <div style={styles.OrderSummaryItem}>
                <table className="striped">
                    <thead style={{height:'24px', fontSize:'14px', backgroundColor:'#CCC'}}>
                        <tr>
                            <th>Item</th>
                            <th>Size</th>
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

                <div style={{textAlign:'center', height:'36px', fontSize:'14px', fontWeight:'bold', paddingTop:'7px'}}>
                    Total Points: {total}
                </div>
            </div>}
        </div>
    );
};