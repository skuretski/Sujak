import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import About from '../containers/pages/About';
import Games from '../containers/pages/Games';
import Home from '../containers/pages/Home';
import News from '../containers/pages/News';
import Nursing from '../containers/pages/Nursing';
import Projects from '../containers/pages/Projects';
import My404 from '../containers/pages/My404';
import NavBar from '../components/Navigation/NavBar';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/games" component={Games}/>
                    <Route path="/news" component={News}/>
                    <Route path="/nursing" component={Nursing}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="*" component={My404}/>
                </Switch>
                <NavBar/>
            </div>
        );
    }
}


export default withRouter(App);
