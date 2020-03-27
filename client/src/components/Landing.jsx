import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {

    const styles = {
        newOrderButton: { marginTop:'30px'},
        landingTextBox: {
            backgroundColor:'rgba(0,167,135,.5)',
            color:'white',
            padding:'0 44px',
            paddingBottom:'25px',
            borderRadius:'20px'
        }
    }

    return (
        <div>
            
            <div className="vimeo-wrapper">
                <iframe src="https://player.vimeo.com/video/364294932?background=1&autoplay=1&loop=1&byline=0&title=0"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        title="wwl_video"
                        allowFullScreen>
                </iframe>
            </div>

            <div    style={{paddingTop:'100px', textAlign: 'center', fontFamily:'Montserrat, sans-serif'}}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={styles.landingTextBox}>
                        <h1>Uniform Order Hub</h1>
                        <h3>Order Uniforms & Accessories</h3>
                    </div>
                </div>

                <div style={styles.newOrderButton}>
                    <Link   to="/orders/new"
                            className="btn-floating btn-large">
                        <i className="material-icons" style={{fontSize:'50px'}}>add</i>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Landing;