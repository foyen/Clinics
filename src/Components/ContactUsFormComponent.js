import React from "react";
import { CONSTANTS } from "../utils/Constants.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

export class ContactUsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        subject: "",
        replayEmail: "",
        phoneNumber: new Number()
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div id="contact-us-wrapper">
        <form>
          <div className="row">
            <div className="col col-md">
              <div className="form-group">
                <label for="name">Full Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="First and Last Name"
                />
              </div>
            </div>
            <div className="col-md">
              <div className="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-md">
              <div className="form-group">
                <label for="name">Reply Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="name">Message</label>
            <textarea
              type="text"
              row="4"
              className="form-control"
              id="contactText"
              placeholder="Message"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    );
  }
}
export default ContactUsComponent;
