import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// const Header = (props) => {
import './Header.css';

const Header = ({auth}) => {

    const styles = {
        navbar_gray: {'backgroundColor':'#343741'}
    }

    const renderContent = () => {
        if (auth === null) return;
        if (auth === false) return (
            <li>
                <a href="/auth/google">Log In With Google</a>
            </li>
        );
        return [
            <li key="1"></li>,
            <li key="2" style={{margin: '0 10px'}}></li>,
            <li key="3"><a href="/api/logout">Log Out</a></li>
        ];
    }

    return (
        <nav>
            <div    className="nav-wrapper"
                    style={styles.navbar_gray}>
                <Link   to={auth ? '/surveys' : '/'}
                        className="left logo"
                        style={{paddingLeft:'15px'}}>             
                </Link>
                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = ({auth}, ownProps) => ({
    auth
});

export default connect(mapStateToProps)(Header);