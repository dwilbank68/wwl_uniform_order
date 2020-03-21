import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './SurveyList.jsx';
// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';


// import $COMPONENT$ from './$COMPONENT$.jsx';
// const $COMPONENT$ = (props) => {
const Dashboard = () => {


    return (
        <div    style={{textAlign: 'center'}}>
            <SurveyList/>
            <div className="fixed-action-btn">
                <Link   to="/surveys/new"
                        className="btn-floating btn-large red">
                    <i className="material-icons" style={{fontSize:'50px'}}>add</i>
                </Link>
            </div>
        </div>
    );
};


// $COMPONENT$.defaultProps = {};
// $COMPONENT$.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({
//          title: PropTypes.string.isRequired,
//          text: PropTypes.string.isRequired
//     }).isRequired,
//     comments:    PropTypes.arrayOf(PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default Dashboard;


///////////////////////////////////// BACKGROUND IMAGE /////////////////////////////////////

// import Foo from './images/foo.png';

// style={{background:`white url(${Foo})`}}


///////////////////////////////////// REACT-REVEAL EFFECT /////////////////////////////////////

// import Fade from 'react-reveal/Fade.js';
// import Slide from 'react-reveal/Slide.js';
// import Zoom from 'react-reveal/Zoom.js';

// <Fade delay={500}>...</Fade>
// <Slide left delay={1000}>...</Slide
// <Zoom delay={foo.delay}>...</Zoom>