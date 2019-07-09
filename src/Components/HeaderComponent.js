import React, { Component } from "react";
import { CONSTANTS } from "../utils/Constants.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../Styles/nav.css"
class HeaderComponent extends Component {
  state = {
    isOpen: false
  };


  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div id="navigation-wrapper">
        <ul className="nav justify-content-end ">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
          <button
          onClick={this.toggleOpen}
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Dropdown
        </button>
            <div className={menuClass} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </div>
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
