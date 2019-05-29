import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <p className="copyright">{this.props.copyrightText}</p>
                            </div>
                            <div className="col-md-7">
                                <div className="social-icons bottom">
                                    <ul className="list-inline">
                                        <li>{this.props.socialTitle} </li>
                                        <li><Link to={this.props.FacebookLink}><Icofont icon="icofont-github"/></Link></li>
                                        <li><Link to={this.props.TwitterLink}><Icofont icon="icofont-linkedin"/></Link></li>
                                        {/*<li><Link to={this.props.InstagramLink}><Icofont icon="icofont-instagram"/></Link></li>*/}
                                        <li><Link to={this.props.linkedinLink}><Icofont icon="icofont-paper"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
//Props Types
Footer.propTypes = {
    copyrightText: PropTypes.string,
    FacebookLink: PropTypes.string,
    TwitterLink: PropTypes.string,
    /*InstagramLink: PropTypes.string,*/
    linkedinLink: PropTypes.string,
};

//Default Props
Footer.defaultProps = {
    copyrightText: "2019 © Steven Peng.",
    socialTitle: "Connect or Find out more:",
    FacebookLink: "/github",
    linkedinLink: "/linkedin",
    TwitterLink: "/resume"
    /*InstagramLink: "/#0",*/
    
};
export default Footer;
