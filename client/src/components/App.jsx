import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';

import Dashboard from './Dashboard.jsx';                                              
import Header from './Header.jsx';                                              
import Landing from './Landing.jsx';                                              
// import SurveyNew from './surveys/SurveyNew.jsx';                                              
import OrderNew from './orders/OrderNew.jsx';


// import logo from './logo.svg';
import './App.css';
const styles = {
    mainContainer: {
        margin:'70px 50px'
    } 
}

function App({fetchUser}) {
	useEffect(
        () => {fetchUser()},
        [fetchUser]
    )	

    return (
        <div >

            <BrowserRouter>
                <div style={styles.mainContainer}>
                <div className="vimeo-wrapper">
                    <iframe src="https://player.vimeo.com/video/364294932?background=1&autoplay=1&loop=1&byline=0&title=0"
                            frameBorder="0"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            title="wwl_video"
                            allowFullScreen>
                    </iframe>
                </div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/orders" component={Dashboard} />
                        {/* <Route exact path="/surveys/new" component={SurveyNew} /> */}
                        <Route exact path="/orders/new" component={OrderNew} />
                    </Switch>
                </div>
            </BrowserRouter>  
        </div>
    );
}



export default connect(null, actions)(App);