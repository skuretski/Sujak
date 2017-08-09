import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import About from '../components/pages/About';
import Games from '../components/pages/Games';
import Home from '../components/pages/Home';
import News from '../components/pages/News';
import Healthcare from '../components/pages/Healthcare';
import Projects from '../components/pages/Projects';
import My404 from '../components/pages/My404';
import TopNavBar from '../components/Navigation/TopNavBar';
import Namesake from '../components/Subpages/About/Namesake';
import BottomNavBar from '../components/Navigation/BottomNavBar';
import CodingChallenge from '../components/Subpages/Projects/CodingChallenge';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/about/namesake" component={Namesake} />
                    <Route path="/about" component={About} />
                    <Route path="/games" component={Games} />
                    <Route path="/news" component={News} />
                    <Route path="/healthcare" component={Healthcare} />
                    <Route path="/projects/CodeChallenge" component={CodingChallenge} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={My404} />
                </Switch>
                <TopNavBar />
                <BottomNavBar />
            </div>
        );
    }
}


export default withRouter(App);
