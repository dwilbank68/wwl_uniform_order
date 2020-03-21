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

// OrderNew.defaultProps = {};
// OrderNew.propTypes = {
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
// Option 1. Skip it - dispatch is on props anyway
// -----------> this.props.dispatch(loadCourses());
//
//
// Option 2. Wrap props manually
//
// function mapDispatchToProps(dispatch) {
//     return {
//         loadCourses: () => {dispatch(loadCourses())},
//         createCourse: (course) => {dispatch(createCourse(course))},
//     };
// }
// -> this.props.loadCourses, this.props.createCourse
//
//
// Option 3. use bindActionCreators (which is just a shortcut method)
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(
//         { nameYouWantOnProps:nameOfImportedAction },
//         dispatch
//     );
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     };
// }
//
// -> this.props.actions.loadCourses();

///////////////////////////// mapStateToProps //////////////////////////////

// function mapStateToProps(state, ownProps) {
//     return { whatever: state.whatever }
// }
//
// const mapStateToProps = state => ({
//     articles: state.articles
// });

///////////////////////////// context //////////////////////////////

// ManageCoursePage.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default OrderNew;
// export default reduxForm(formOptions)(NameOfComponent)
// or if you're already connected to redux
// const connectedComponent = connect(null, {createPost})(PostsNew);
// export default connect()(OrderNew);
// if 'import * as actions from '../actions/actionsIndex';'
//     export default connect(null, actions)(OrderNew);

// export default connect(mapStateToProps, () => ({}))(OrderNew);
// export default connect(mapStateToProps, mapDispatchToProps)(OrderNew);
// export default connect(mapStateToProps, { nameOfImportedAction })(OrderNew);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')
// 5. see ALTERNATIVE 2 above - no 'this' binding required