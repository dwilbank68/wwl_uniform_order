import React from 'react';
import NumericInput from 'react-numeric-input';

import OrderSizeDropDown from './OrderSizeDropDown.jsx';
// import './OrderBox.css';

// NumericInput.style.b.height = '16px';
NumericInput.style.border = '0px';
NumericInput.style.input.border = '0px';
NumericInput.style.input.height = '26px';
NumericInput.style.input.marginLeft = '5px';
NumericInput.style.input.paddingTop = '8px';
NumericInput.style.input.textAlign = 'center';
// NumericInput.style.input.paddingLeft = '5px';
NumericInput.style.input.width = '74px';


export default ({handleCount, handleSize, lastSizeChosen='', product}) => {
    const {code, color, image, name, points} = product;

    const styles = {
        codebox: {width:'40px', fontSize:'12px', fontFamily: 'Montserrat, sans-serif'},
        img: { height:'50px', width:'40px'},
        namebox: {fontSize:'12px',
            fontFamily: 'Open Sans, sans-serif',
            padding: '6px 0 6px 6px', 'backgroundColor':color},
        pointsbox: {fontSize:'10px', fontFamily: 'Open Sans, sans-serif', textAlign:'center'},
        numInput: { marginRight: '10px'}
    }

    const numericInputDisabled = () => {
        const uni_fit_items = ['90CL','90DM','90BG','90DB','90BW'];
        const is_regular_item = !uni_fit_items.includes(code);
        const noSizeChosen = lastSizeChosen.split('_')[0] !== code;
        if (!is_regular_item) return false;
        if (noSizeChosen) return true;
    }

    return (
        <div className='wrapper' style={{backgroundColor:'white'}}>

            <div    className='imgBox'>
                <img src={image} alt={code} style={styles.img}/>
            </div>
            
            <div className='codeBox' style={styles.codebox}>{code}</div>
            <div className='nameBox' style={styles.namebox}>{name}</div>
            <div className='pointsBox' style={styles.pointsbox}>{points} pts</div>

            <div className='dropdown'>
                <OrderSizeDropDown  product={product}
                                    code={code}
                                    onChange={handleSize}/>
            </div>

            <div className='numberBox'>
                {<NumericInput  className='form-control'
                                data-item={code}
                                style={{input:{fontFamily: 'OpenSans, sans-serif'}}}
                                disabled={numericInputDisabled()}
                                min={0} max={25}
                                name={`${code}_count`}
                                onChange={handleCount}
                                size={12}/>}
            </div>

        </div>
    );
};