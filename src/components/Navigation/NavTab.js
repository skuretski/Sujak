import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavTab extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { active, linkName } = this.props;
        if(selected){
            return(
                <li><NavLink activeClassName="selected" to={linkName}>{linkName}</NavLink></li> 
            );
        } else{
            return(
                <li><NavLink to={linkName}>{linkName}</NavLink></li>
            );
        }
    }
}

export default NavTab;