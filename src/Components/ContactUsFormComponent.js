import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../Styles/ContactUs.css"

export class ContactUs extends React.Component {


  render() {
    return (
    <div id="contactUs" className="clearfix">
    <h2>Get in Touch With Us.</h2>
    <div>
    <div className="contact">
          <h4>Phoenix Contact</h4>
            Eduardo Gonzalez, PhD, MS<br/>
            Assistant Professor, Division of Public Health and Translational Research Program Manager<br/>
            Prevention Mobile Unit-Phoenix<br/>
            Gonzalezfagoaga@email.arizona.edu<br/>
            480-779-7904
      </div>
      <div className="contact">
          <h4>Tuscon Contact</h4>
            Shelia Soto, MPH<br/>
            Program Manager, Primary Prevention Mobile Unit-Tuscon <br/>
            Ssoto2@email.arizona.edu<br/>
            520-251-8418
      </div>
    </div>

    </div>
    );
  }
}
export default ContactUs;
