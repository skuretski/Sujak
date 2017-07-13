import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import About from '../components/pages/About';
import Games from '../components/pages/Games';
import Home from '../components/pages/Home';
import News from '../components/pages/News';
import Nursing from '../components/pages/Nursing';
import Projects from '../components/pages/Projects';
import My404 from '../components/pages/My404';
import TopNavBar from '../components/Navigation/TopNavBar';
import Namesake from '../components/Subpages/Namesake';
import BottomNavBar from '../components/Navigation/BottomNavBar';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/about/namesake" component={Namesake}/>
                    <Route path="/about" component={About}/>
                    <Route path="/games" component={Games}/>
                    <Route path="/news" component={News}/>
                    <Route path="/nursing" component={Nursing}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="*" component={My404}/>
                </Switch>
                <TopNavBar/>
                <BottomNavBar/>
            </div>
        );
    }
}


export default withRouter(App);
