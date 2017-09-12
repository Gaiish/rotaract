import React, {Component} from 'react';

export default class Nav extends Component{

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Rotaract</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">BROWSE EVENTS</a>
            </li>
            <li>
              <a href="#">SIGN IN</a>
            </li>
            <li>
              <a href="#">CREATE AN EVENT</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
