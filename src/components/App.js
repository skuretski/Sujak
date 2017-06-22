import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Hello!
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{

    }
}

export default withRouter(connect(mapStateToProps)(App));
