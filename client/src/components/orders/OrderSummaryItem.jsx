import React from 'react';
import PRODUCTS from '../../constants/productLinks.js';



export default
({item}) => {

    if (item) {


        const styles = {
            wrapper: {
                backgroundColor:color,
                border: '1px solid #ddd',
                height:'52px',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between' 
            },
            imgBox: {
                height:'50px', width:'40px',
                marginLeft:'10px',
                // backgroundImage: `url("${image}")`
            },
            img: {
                height:'50px', width:'40px'
            },
            productCode: {
                flex: 1,
                marginLeft:'10px'
            },
            nameBox: {
                flex: 6
            },
            pointsBox: {
                color: '#aaa',
                flex: 1
            }
        }
    
        return (

        );
    }


};