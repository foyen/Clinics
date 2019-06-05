import React from "react";
import { CONSTANTS } from "../utils/Constants.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

export class ContactUsComponent extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        form:{
            name:""
            subject:""
            replayEmail:""
            phoneNumber: new Number()
        }
        
    }

    }
}
export default ContactUsComponent