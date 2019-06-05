import React from "react";
import { CONSTANTS } from "../utils/Constants.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

export class HeaderComponent extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        
    }

    }

    
    componentDidMount(){
        
        //check current page so tabbed bar can be rendered.
    }

    render() {
    return (
        <div id="nav-wrapper">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Category 1
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Category 2
                    </a>
                </li>
            </ul>
        </div>
    );
    }
}

export default HeaderComponent;
