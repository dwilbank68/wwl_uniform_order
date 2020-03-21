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
    const {code, color, image, name, points, sizes} = product;

    const styles = {
        codebox: {width:'40px', fontSize:'12px'},
        img: { height:'50px', width:'40px'},
        namebox: {fontSize:'12px'},
        numInput: { marginRight: '10px'}
    }

    const numericInputDisabled = () => {
        // console.log({code});
        const uni_fit_items = ['90CL','90DM','90BG','90DB','90BW'];
        const is_regular_item = !uni_fit_items.includes(code);
        const noSizeChosen = lastSizeChosen.split('_')[0] !== code;
        // console.log({is_regular_item});
        // console.log({noSizeChosen});
        if (!is_regular_item) return false;
        if (noSizeChosen) return true;
    }

    return (
        <div className='wrapper' style={{'backgroundColor':color}}>

            <div    className='imgBox'>
                <img src={image} alt={code} style={styles.img}/>
            </div>
            
            <div className='codeBox' style={styles.codebox}>{code}</div>
            <div className='nameBox' style={styles.namebox}>{name}</div>
            <div className='pointsBox'>{points} pts</div>

            <div className='dropdown'>
                <OrderSizeDropDown  product={product}
                                    code={code}
                                    onChange={handleSize}/>
            </div>

            <div className='numberBox'>
                {<NumericInput  className='form-control'
                                data-item={code}
                                disabled={numericInputDisabled()}
                                min={0} max={25}
                                name={`${code}_count`}
                                onChange={handleCount}
                                size={12}/>}
            </div>

        </div>
    );
};