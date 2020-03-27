import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// const Header = (props) => {
import './Header.css';

const Header = ({auth}) => {

    const styles = {
        nav: {position:'absolute', left:'5px', top:'0px'},
        navbar_green: {backgroundColor:'#00a787'},
        profilePic: {height:'50px', width:'50px', marginTop:'7px', borderRadius:'5px'}
    }

    const renderContent = () => {
        if (auth === null) return;
        if (auth === false) return (
            <li>
                <a href="/auth/google">Log In With Google</a>
            </li>
        );
        return [
            <li key="1" style={{margin: '0 10px'}}>
                <img    src={auth.photo}
                        style={styles.profilePic}
                        alt=""/>
            </li>,
            <li key="2">
                <div style={{marginTop:'-4px'}}>{auth.name}</div>
                <div style={{fontSize:'10px', marginTop:'-50px'}}>{auth.email}</div>
            </li>,
            <li key="3"><a href="/api/logout">Log Out</a></li>
        ];
    }

    return (
        <nav style={styles.nav}>
            <div    className="nav-wrapper"
                    style={styles.navbar_green}>
                <Link   to={auth ? '/orders' : '/'}
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

const mapStateToProps = ({auth}) => ({
    auth
});

export default connect(mapStateToProps)(Header);