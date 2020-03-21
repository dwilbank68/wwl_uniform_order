import React from 'react';
import NumericInput from 'react-numeric-input';

import OrderSizeDropDown from './OrderSizeDropDown.jsx';
// import './OrderBox.css';

// NumericInput.style.b.height = '16px';
NumericInput.style.border = '0px';
NumericInput.style.input.border = '0px';
NumericInput.style.input.height = '26px';
NumericInput.style.input.marginLeft = '5px';
NumericInput.style.input.textAlign = 'center';
// NumericInput.style.input.paddingLeft = '5px';
NumericInput.style.input.width = '74px';

export default ({handleCount, handleSize, lastSizeChosen='', product}) => {
    const {code, color, image, name, points,} = product;

    const styles = {
        codebox: {width:'40px', fontSize:'12px'},
        img: { height:'50px', width:'40px'},
        namebox: {fontSize:'12px'},
        numInput: { marginRight: '10px'},
        unifit: {
            fontSize: '12px',
            color: '#888',
            height: '38px',
            width: '80px',
            padding: '11px 18px',
            border: '1px solid',
            borderRadius: '5px'
        }
    }

    return (
        <div className='wrapper' style={{'backgroundColor':color}}>

            <div    className='imgBox'>
                <img src={image} alt={code} style={styles.img}/>
            </div>
            
            <div className='codeBox' style={styles.codebox}>{code}</div>
            <div className='nameBox' style={styles.namebox}>{name}</div>
            <div className='pointsBox'>{points} pts</div>

            <div className='dropdown' style={styles.unifit}>
                Uni-Fit
            </div>

            <div className='numberBox'>
                {<NumericInput  className='form-control'
                                data-item={code}
                                min={0} max={25}
                                name={`${code}_count`}
                                onChange={handleCount}
                                size={12}/>}
            </div>

        </div>
    );
};