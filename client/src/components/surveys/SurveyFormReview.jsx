import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import formFields from './formFields.js';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions/index.js';

const SurveyFormReview = ({history, onCancel, formValues, submitSurvey}) => {
    const reviewFields = _.map(formFields, ({label, name}) => (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    )
    return (
        <div className="SurveyFormReview">
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat"
                    onClick={onCancel}>
                Back
            </button>
            <button className="green btn-flat white-text right"
                    onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    formValues: state.form.surveyForm.values
});

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));