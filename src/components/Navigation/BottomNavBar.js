import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BottomNavBar extends Component {
render() {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-default navbar-fixed-bottom">
				<ul className="list-inline">
					<li><NavLink to="https://twitter.com/TheSushiQ" target="_blank"><img src="http://i.imgur.com/W3eJ3uW.png?3" alt="twitter_logo" /></NavLink></li>
					<li><NavLink to="https://github.com/skuretski" target="_blank"><img src="http://i.imgur.com/NwpINXv.png" alt="github_logo" /></NavLink></li>
					<li><NavLink to="https://www.linkedin.com/in/skuretski/" target="_blank">
						<img src="http://i.imgur.com/2y3xMGV.png" alt="linkedin_logo" /></NavLink>
					</li>
					<li><span className="glyphicon glyphicon-copyright-mark" aria-hidden="true">Sujak Ninja</span></li>
				</ul>
			</nav>
		</div>
	);
}
}

export default BottomNavBar;
