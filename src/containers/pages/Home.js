import React, { Component } from 'react';
import NavBar from '../../components/Navigation/NavBar';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <h1>Home!</h1>
            </div>
        )
    }
}

export default Home;