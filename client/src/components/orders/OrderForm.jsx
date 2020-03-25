import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

// import _ from 'lodash';
import OrderRow from './OrderRow.jsx';
import OrderRowUniFitItem from './OrderRowUniFitItem.jsx';
import OrderSummary from './OrderSummary.jsx';
import PRODUCTS from '../../constants/productLinks.js';
import {submitOrder} from '../../actions/index.js';

const styles = {
    form_wrapper: { display: 'flex'},
    left: {flex:3, padding: '5px'},
    right: {
        flex:2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

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
        if (is_unifit_item) this.lastSizeChosen = `${item}_Uni-Fit`;
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
        const {name, email, _id} = this.props.auth;
        const submitObj = {
            ...this.state,
            name, email, _id
        }
        // history put on the props via the imported 'withRouter'
        this.props.submitOrder(submitObj, this.props.history);
        // this.setState({auth:this.props.auth})
        // console.log(JSON.stringify(submitObj , null, 2));
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
                        <OrderRowUniFitItem    code={k}
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
                    <div style={{width:'90%'}}>
                        <OrderSummary   cartState={this.state}
                                        removeItem={this.removeItem}
                                        // showTable={!_.isEmpty(this.state)}/>
                                        showTable={true}/>
                        <div style={{textAlign: 'center', paddingBottom:'15px', paddingTop:'15px'}}>
                            <button className="btn-flat btn-med"
                                    onClick={this.handleSubmit}
                                    // onClick={() => {
                                    //     const {name, email, _id} = this.props.auth;
                                    //     const submitObj = {
                                    //         ...this.state,
                                    //         name, email, userId:_id
                                    //     }
                                    //     this.props.submitOrder(submitObj, this.props.history)}
                                    // }
                                    style={{fontFamily:'Montserrat, sans-serif', backgroundColor:'#00a787', color:'white'}}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    }
}

const mapStateToProps = ({auth}, ownProps) => ({
    auth
});

export default connect(mapStateToProps, {submitOrder})(withRouter(OrderForm));