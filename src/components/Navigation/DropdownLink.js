import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DropdownLink extends Component {
	renderOneLink(url, title) {
		return (
			<li>
				<NavLink
					to={url}
					activeClassName="selected" 
					onClick={(e) => this.onClick()}
				>{title}
				</NavLink>
			</li>
		);
	}
	render() {
		return (
			<div className="container">
				<li className="dropdown">
				<a
					className="dropdown-toggle"
					data-toggle="dropdown"
					href="#"
					role="button"
					aria-haspopup="true"
					aria-expanded="false"
				>{this.props.title}<span className="caret" />
				</a>
				<ul className="dropdown-menu">
					{this.renderOneLink('/projects/CodeChallenge', 'Coding Challenges')}
			</ul>
			</li>
		</div>
		);
	}
}

export default DropdownLink;
