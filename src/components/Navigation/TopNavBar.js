import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TopNavBar extends Component{
    constructor(props){
        super(props);
    }
    onClick(){
        $('#main-nav').collapse('hide');
    }
    render(){
        return(
            <div className="container-fluid">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                                <span className="sr-only">Toggle Navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink className="navbar-brand" to="/" activeClassName="selected" onClick={(e) => this.onClick()}>
                                    <img className="hidden-xs" src="http://i.imgur.com/KggkdcJt.png"/>
                                    <h3 className="visible-xs">SujakStack</h3>
                            </NavLink>
                        </div> {/* <!-- navbar-header --> */}
                    </div> {/* <!-- container-fluid --> */}
                    <div className="collapse navbar-collapse" id="main-nav">
                        <ul className="nav nav-pills nav-justified">
                            <li/>
                            <li><NavLink to="/news" activeClassName="selected" onClick={(e) => this.onClick()}>News</NavLink></li>
                            <li><NavLink to="/projects" activeClassName="selected" onClick={(e) => this.onClick()}>Projects</NavLink></li>
                            <li><NavLink to="/games" activeClassName="selected" onClick={(e) => this.onClick()}>Games</NavLink></li>
                            <li><NavLink to="/nursing" activeClassName="selected" onClick={(e) => this.onClick()}>Health Care</NavLink></li>
                            <li><NavLink to="/about" activeClassName="selected" onClick={(e) => this.onClick()}>About</NavLink></li>
                        </ul> {/* <!-- nav-pills --> */}
                    </div> {/* <!-- navbar-collapse --> */}
                </nav> {/* <!-- navbar --> */}

                <nav className="navbar navbar-default navbar-fixed-bottom">
                    <ul className="list-inline">                    
                        <li><NavLink to="https://twitter.com/TheSushiQ" target="_blank"><img src="http://i.imgur.com/W3eJ3uW.png?3" alt="twitter_logo"/></NavLink></li>
                        <li><NavLink to="https://github.com/skuretski" target="_blank"><img src="http://i.imgur.com/NwpINXv.png" alt="github_logo"/></NavLink></li>
                        <li><NavLink to="https://www.linkedin.com/in/skuretski/" target="_blank"><img src="http://i.imgur.com/2y3xMGV.png" alt="linkedin_logo"/></NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default TopNavBar;