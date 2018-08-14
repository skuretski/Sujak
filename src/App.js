import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom';

import About from 					'./pages/About/About';
import Games from 					'./pages/Games/Games';
import Home from 						'./pages/Home/Home';
import News from 						'./pages/News/News';
import Healthcare from 			'./pages/Healthcare/Healthcare';
import Projects from 				'./pages/Projects/Projects';
import My404 from 					'./pages/My404';
import TopNavBar from 			'./components/navigation/TopNavBar';
import Namesake from 				'./pages/About/Namesake';
import BottomNavBar from 		'./components/navigation/BottomNavBar';
import CodingChallenge from './pages/Projects/CodingChallenge';

class App extends Component {
render() {
	return (
		<div>
			<TopNavBar />
			<Router>
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
			</Router>
			<BottomNavBar />
		</div>
	);
}
}

export default withRouter(App);
