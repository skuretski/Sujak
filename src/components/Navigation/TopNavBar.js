import React from 'react';
import { Navbar, NavDropdown, Nav, NavItem, MenuItem } from 'react-bootstrap';

export default class TopNavBar extends React.Component {
render() {
return (
  // <div className="container-fluid">
  //   <nav className="navbar navbar-default navbar-fixed-top">
  //     <div className="container-fluid">
  //       <div className="navbar-header">
  //         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
  //           <span className="sr-only">Toggle Navigation</span>
  //           <span className="icon-bar" />
  //           <span className="icon-bar" />
  //           <span className="icon-bar" />
  //         </button>
  //         <NavLink className="navbar-brand" to="/" activeClassName="selected" onClick={(e) => this.onClick()}>
  //           <img className="hidden-xs" src="http://i.imgur.com/KggkdcJt.png" />
  //           <h3 className="visible-xs">SujakStack</h3>
  //         </NavLink>
  //       </div> {/* <!-- navbar-header --> */}
  //     </div> {/* <!-- container-fluid --> */}
  //   <div className="collapse navbar-collapse" id="main-nav">
  //     <ul className="nav nav-pills nav-justified">
  //       <li/>
  //       <li><NavLink to="/news" activeClassName="selected" onClick={(e) => this.onClick()}>News</NavLink></li>
  //       <li className="dropdown">
  //         <a  
  //           className="dropdown-toggle" 
  //           data-toggle="dropdown" 
  //           href="#" 
  //           role="button" 
  //           aria-haspopup="true"
  //           aria-expanded="false">Projects<span className="caret"></span>
  //         </a>
  //         <ul className="dropdown-menu">
  //           <li><NavLink to="/projects/CodeChallenge" activeClassName="selected" onClick={(e) => this.onClick()}>Coding Challenges</NavLink></li>
  //           <li><NavLink to="/projects/cassiopeia" activeClassName="selected" onClick={(e)=> this.onClick()}>Current Projects</NavLink></li>
  //         </ul>
  //       </li>
  //       <li><NavLink to="/games" activeClassName="selected" onClick={(e) => this.onClick()}>Games & Hardware</NavLink></li>
  //       <li><NavLink to="/healthcare" activeClassName="selected" onClick={(e) => this.onClick()}>Healthcare</NavLink></li>
  //       <li className="dropdown">
  //         <a 
  //         className="dropdown-toggle"
  //         data-toggle="dropdown" href="#" 
  //         role="button"
  //         aria-haspopup="true"
  //         aria-expanded="false">About<span className="caret"></span>
  //         </a>
  //         <ul className="dropdown-menu">
  //           <li><NavLink exact={true} activeClassName="selected" onClick={(e) => this.onClick()} to="/about">About Sujak</NavLink></li>
  //           <li><NavLink exact={true} activeClassName="selected" onClick={(e) => this.onClick()} to="/about/namesake">Namesake</NavLink></li>
  //         </ul>
  //       </li>
  //     </ul> {/* <!-- nav-pills --> */}
  //   </div> {/* <!-- navbar-collapse --> */}
  //   </nav> {/* <!-- navbar --> */}
  // </div>
  <div>
  <Navbar className="mb-0 pb-0">
  <Navbar.Header>
    <Navbar.Brand>
      <NavItem className="list-group-item" href="/"><img alt="logo" className="hidden-xs" src="https://i.imgur.com/43Ftomz.pngg" /></NavItem>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem href="#">
      Link
    </NavItem>
    <NavItem href="#">
      Link
    </NavItem>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
      <MenuItem >Action</MenuItem>
      <MenuItem >Another action</MenuItem>
      <MenuItem >Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem >Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
</div>
);
}
}
