import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm.jsx';
import SurveyFormReview from './SurveyFormReview.jsx';

class SurveyNew extends Component {

    state = { showFormReview: false };

    renderContent = () => {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({showFormReview:false})}/>
        }
        return <SurveyForm onSurveySubmit={() => this.setState({showFormReview:true})}/>
    }

    render() {
        return (
            <div className="CLASS_NAME">
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
