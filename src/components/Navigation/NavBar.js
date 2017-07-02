import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component{
    constructor(props){
        super(props);
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
                            <NavLink className="navbar-brand" to="/"><bold>SujakStack</bold></NavLink>
                        </div> {/* <!-- navbar-header --> */}
                    </div> {/* <!-- container-fluid --> */}
                    <div className="collapse navbar-collapse" id="main-nav">
                        <ul className="nav nav-pills nav-justified">
                            <li><NavLink exact={true} to="/" activeClassName="selected"><span className="glyphicon glyphicon-home"></span>  Home</NavLink></li>
                            <li><NavLink to="/news" activeClassName="selected">News</NavLink></li>
                            <li><NavLink to="/projects" activeClassName="selected">Projects</NavLink></li>
                            <li><NavLink to="/games" activeClassName="selected">Games</NavLink></li>
                            <li><NavLink to="/nursing" activeClassName="selected">Nursing</NavLink></li>
                            <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                        </ul> {/* <!-- nav-pills --> */}
                    </div> {/* <!-- navbar-collapse --> */}
                </nav> {/* <!-- navbar --> */}
            </div>
        );
    }
}

export default NavBar;