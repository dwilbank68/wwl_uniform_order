import React from 'react';

// import SurveyField from './SurveyField.jsx';
// const SurveyField = (props) => {
export default ({input, label, meta:{error, touched}}) => {
    

    return (
        <div className="SurveyField">
            <label>{label}</label>
            <input  {...input}
                    style={{marginBottom:'5px'}}/>
            <div    className="red-text"
                    style={{marginBottom:'20px'}}>
                {touched && error}
            </div>
        </div>
    );
};


// SurveyField.defaultProps = {};
// SurveyField.propTypes = {
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

