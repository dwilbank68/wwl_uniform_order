import React, { Component } from 'react';
import _ from 'lodash';
// import {reduxForm} from 'redux-form';
import OrderRow from './OrderRow.jsx';
import OrderRow_UniFitItem from './OrderRow_UniFitItem.jsx';
import OrderSummary from './OrderSummary.jsx';
import PRODUCTS from '../../constants/productLinks.js';

const styles = {
    form_wrapper: { display: 'flex'},
    left: {flex:3, padding: '5px'},
    right: {flex:2, padding: '5px'}
}
// const validate = v => {	
//     // v is the formValues
//     const errors = {};
//     if (!v.title) errors.title = 'Enter a title';
//     if (!v.categories) errors.categories = 'Enter a category';
//     if (!v.content) errors.content = 'Enter some content';
//     return errors;									// if 'errors' is still empty, the form will submit
// }

// const formOptions = {
//     form: 'orderForm',
//     destroyOnUnmount: false
//     // validate
// }



class OrderForm extends Component {

    state = {};

    handleChange = e => {
        const {name, value} = e.target;       
        this.setState({...this.state, [name]: value})
    }

    handleSize = size => {
        this.lastSizeChosen = size.value;
        this.setState({
            [size.value]: 0
        });
    }

    handleCount = (num,b,element) => {
        const item = element.dataset.item;
        const unifit_items = ['90CL','90DM','90BG','90DB','90BW'];
        const is_unifit_item = unifit_items.includes(item);
        if (is_unifit_item) this.lastSizeChosen = `${item}_Uni-fit`;
        if (this.lastSizeChosen.split('_')[0] === item) {
            if (num === 0) {
                const newState = this.state;
                delete newState[this.lastSizeChosen];
                this.setState(newState);
                return;
            }
            this.setState({
                [this.lastSizeChosen]: num
            });
        }
    }

    removeItem = (e, key) => {
        const newState = this.state;
        delete newState[key];
        this.setState(newState);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(JSON.stringify(this.state , null, 2));
    }

    isUniFitItem = productCode => {
        return Object.keys(PRODUCTS[productCode].sizes).length === 1
    }

    renderRows = () => {
        return (
            Object
                .keys(PRODUCTS)
                .map((k,i) => {
                    if (!this.isUniFitItem(k)) return (
                        <OrderRow   code={k}
                                    handleChange={this.handleChange}
                                    handleCount={this.handleCount}
                                    handleSize={this.handleSize}
                                    key={i}
                                    lastSizeChosen={this.lastSizeChosen}
                                    product={PRODUCTS[k]}
                                    size={this.state.pendingSize}/>
                    )
                    return (
                        <OrderRow_UniFitItem    code={k}
                                                handleChange={this.handleChange}
                                                handleCount={this.handleCount}
                                                key={i}
                                                lastSizeChosen={`${k}_Uni-Fit`}
                                                product={PRODUCTS[k]}
                                                size={this.state.pendingSize}/>
                    )
                })
        )
    }

    render() {
        
        return (
            <div style={styles.form_wrapper}>
                
                <div style={styles.left}>
                    {this.renderRows()}
                </div>
            
                <div style={styles.right}>
                    <OrderSummary   cartState={this.state}
                                    removeItem={this.removeItem}
                                    // showTable={!_.isEmpty(this.state)}/>
                                    showTable={true}/>

                    <div style={{textAlign: 'center', paddingBottom:'15px', paddingTop:'15px'}}>
                        <button className="btn-flat btn-med green white-text"
                                onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default OrderForm;