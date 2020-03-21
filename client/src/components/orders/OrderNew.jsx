import React, { Component } from 'react';
import OrderForm from './OrderForm.jsx';

import './Orders.css';

class OrderNew extends Component {

    render() {
        return (

            <div>
                <div className="vimeo-wrapper">
                    <iframe src="https://player.vimeo.com/video/364294932?background=1&autoplay=1&loop=1&byline=0&title=0"
                            frameBorder="0"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            allowFullScreen>
                    </iframe>
                </div>
                <OrderForm/>
            </div>
        );
    }
}

export default OrderNew;
