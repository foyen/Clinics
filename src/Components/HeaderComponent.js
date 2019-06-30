import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../Styles/nav.css"
class HeaderComponent extends Component {
  render() {
    return (
      <div id="navigation-wrapper">
        <ul className="nav justify-content-end ">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/map">
              Map
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeaderComponent;
