import React, { Component } from 'react';
import _ from 'lodash';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
import SurveyField from './SurveyField.jsx';
import validateEmails from '../../utils/validateEmails.js';
import formFields from './formFields.js';

const validate = v => {	
    // v is the formValues
    const errors = {};
    errors.recipients = validateEmails(v.recipients || '');
    _.each(formFields, ({name}) => {
        if (!v[name]) errors[name] = `Enter a ${name}`;
    });
    return errors;
    // if 'errors' is still empty, the form will submit
}

const formOptions = {
    form: 'surveyForm',
    destroyOnUnmount: false, 				// 1
    validate
}


class SurveyForm extends Component {

    renderFields = () => {
     
        return _.map(formFields, ({label, name}) => (
            <Field  component={SurveyField}
                    type='text'
                    label={label}
                    name={name} key={name}/>
        ))
        
    }

    render() {
        const {handleSubmit, onSurveySubmit} = this.props;
        return (
            <div className="CLASS_NAME">
                <form onSubmit={handleSubmit(onSurveySubmit)}>
                    {this.renderFields()}

                    <Link   to='/surveys'
                            className="red btn-flat white-text">
                        Cancel
                    </Link>

                    <button className="teal btn-flat right white-text"
                            type="submit">
                        Submit
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm(formOptions)(SurveyForm);