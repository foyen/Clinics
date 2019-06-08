import React, { Component } from "react";
import { CONSTANTS } from "../utils/Constants.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../Styles/nav.css"
class HeaderComponent extends Component {
  render() {
    return (
      <div id="navigation-wrapper">
        <ul class="nav justify-content-end ">
          <li class="nav-item">
            <a class="nav-link active" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/map">
              Map
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeaderComponent;
