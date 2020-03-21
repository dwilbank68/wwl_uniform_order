import React, { Component } from 'react';
	
import { connect } from 'react-redux';
    
import {fetchSurveys} from '../actions/index.js';
// import {ACTION_CONST1, ACTION_CONST2} from '../actions';
	
// import { bindActionCreators } from 'redux';
	
class SurveyList extends Component {
    
    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }
    componentDidMount() {
        this.props.fetchSurveys();
    }
    
    // state = { whatever: false }; // if using create-react-app
    
    // handleClick(e) {
    //    
    //    this.setState({
    //        dispatch is available under props.dispatch
    //    })
    // }
    
    /////////// ALTERNATIVE 1 ///////////
    // using create-react-app
    // state = { whatever: false };
    
    /////////// ALTERNATIVE 2 ///////////
    // using ES2016 property initializer
    // no more constructor or 'this' binding required
    //
    // state = { whateve': false }
    //
    // handleClick = (e) => {
    //    this.setState(prevState => {
    //        return {}
    //    })
    // }
    
    renderSurveys = () => {
        return this.props.surveys.reverse().map(survey => (
            <div    class="card blue-grey darken-1 white-text"
                    key={survey._id}>
                <div class="card-content">
                    <span class="card-title">{survey.title}</span>
                    <p>{survey.body}</p>
                    <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                </div>
                <div class="card-action">
                    <a href="#">Yes: {survey.yes}</a>
                    <a href="#">No: {survey.no}</a>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div className="">
                {this.renderSurveys()}
            </div>
        );
    }
}
	
// SurveyList.defaultProps = {};
// SurveyList.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol
	
///////////////////////////// mapDispatchToProps //////////////////////////////
//
// Skip it - dispatch is on props anyway                            // 1
//
// function mapDispatchToProps(dispatch) {                          // 2
//     return {
//         loadCourses: () => {dispatch(loadCourses())},
//         createCourse: (course) => {dispatch(createCourse(course))},
//     };
// }
//
// function mapDispatchToProps(dispatch) {                          // 3
//     return bindActionCreators(
//         { nameYouWantOnProps:nameOfImportedAction },
//         dispatch
//     );
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)           // 4
//     };
// }
//
const mapStateToProps = ({surveys}) => ({
    surveys
});
	
///////////////////////////// context //////////////////////////////
	
// ManageCoursePage.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');
	
export default connect(mapStateToProps, {fetchSurveys})(SurveyList);
	
// export default connect(null, actions)(SurveyList);         // 5
// export default connect(mapStateToProps, () => ({}))(SurveyList);
// export default connect(mapStateToProps, { nameOfImportedAction })(SurveyList);
	
// 1 -  to access --> this.props.dispatch(loadCourses());
// 2 -  to access --> this.props.loadCourses, this.props.createCourse
// 3 -  use bindActionCreators (which is just a shortcut method)
// 4 -  to access --> this.props.actions.loadCourses();
// 5 -  if you "import * as actions from '../actions/actionsIndex';"
	
	
// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')
// 5. see ALTERNATIVE 2 above - no 'this' bin