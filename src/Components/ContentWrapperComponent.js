import React from "react";
import { ContactUs } from "../Components/ContactUsFormComponent.js";
import { ZipForm } from "./ZipForm";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/ContentWrapper.css";

export class ContentWrapperComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: ""
    };
  }
  searchZip = newZip => {};

  render() {
    return (
      <div id="content-wrapper">
        <section id="top-content">
          <div id="main-picture">
            <div className="container">
              <h1 id="main-title">Mobile Health Unit</h1>
              <h3> Find A Clinic Near You</h3>
              <div id="zip-search">
                in development use map
                <ZipForm zipCode={this.state.zipCode} search={this.searchZip} />
              </div>
              <div id="summary">
                <p>
                  The UA Primary Prevention Mobile Health Unit (MHU) provides
                  free preventive health screening assessments (e.g. Blood
                  Pressure, Blood Sugar, Hemoglobin A1c, etc.) and access to
                  health services to underserved populations by targeting key
                  priority issues such as nutrition, obesity, diabetes, mental
                  health, and domestic violence, to name a few. With units in
                  Phoenix and Tucson, serving Maricopa, Pima, Pinal and Santa
                  Cruz counties, the program aims to promote healthy lifestyle
                  choices and utilizes culturally and linguistically sensitive
                  materials and workshops for a better understanding of the
                  complex medical and social issues facing medically underserved
                  communities in our state. Our mobile health units are run by
                  program managers and health education professionals in
                  addition to student volunteers from all four UA Health
                  Sciences Colleges, as well as undergraduate students from the
                  various disciplines. The Mobile Health Unit receives grants
                  and donations to outreach to communities within the state of
                  Arizona.
                </p>
              </div>
              {
                /*
              <button className="btn btn-warning tell-more">
                Tell Me More
              </button>
               */
              }
           
            </div>
          </div>
        </section>
        <section className="middle-content">
          <div className="container">
            <h4 className="col-title">What We Do</h4>
            <p>
              The Mobile Health Unit focuses on screening for and the prevention
              of chronic health diseases, known to jeopardize the health and
              wellbeing of individuals such as the following:
            </p>
            <h5 className="col-title">Additional Services Include</h5>
            <div className="row">
              <div className="col-4">
                <ul>
                  <li>Referrals to Federally Qualified Health Centers</li>
                  <li>Flu Vaccination</li>
                  <li>Sexually Transmitted Infections</li>
                </ul>
              </div>
              <div className="col-4">
                <ul>
                  <li>Youth Programs</li>
                  <li>Health Insurance </li>
                  <li>HIV/Hep-C</li>
                  <li>Cancer</li>
                </ul>
              </div>
              <div className="col-4">
                <ul>
                  <li>Enrollment assistance</li>
                  <li>Mental health</li>
                  <li>Tobacco, Alcohol & Drug abuse</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="middle-content">
          <div className="row justify-content-md-center">
            <div className="col pop">
              <div className="col-img">
                <img
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"
                  alt="img"
                />
              </div>
              <div className="col-content">
                <h4 className="col-title">Cardiovascular disease</h4>
                <p>
                  {" "}
                  Curabitur gravida arcu ac tortor dignissim convallis. Volutpat
                  commodo sed egestas egestas fringilla phasellus. Cras sed
                  felis eget velit aliquet sagittis. Neque gravida in fermentum
                  et sollicitudin ac orci phasellus egestas. Nibh venenatis cras
                  sed felis eget velit aliquet sagittis. Ullamcorper sit amet
                  risus nullam eget felis eget. Maecenas volutpat blandit
                  aliquam etiam erat velit. Posuere sollicitudin aliquam
                  ultrices sagittis orci. Placerat in egestas erat imperdiet sed
                  euismod nisi. Mus mauris vitae ultricies leo integer malesuada
                  nunc vel. Dui accumsan sit amet nulla facilisi morbi tempus
                  iaculis. Nunc non blandit massa enim nec dui. Pulvinar etiam
                  non quam lacus suspendisse faucibus interdum. Neque volutpat
                  ac tincidunt vitae. Diam quis enim lobortis scelerisque
                  fermentum dui faucibus in ornare. Adipiscing tristique risus
                  nec feugiat in.
                </p>
              </div>
              <div className="btn-holder clearfix">
                <button type="button" className="btn btn-warning read-more">
                  Read More....
                </button>
              </div>
            </div>
            <div className="col pop">
              <div className="col-img">
                <img
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"
                  alt="img"
                />
              </div>
              <div className="col-content">
                <h4 className="col-title">Diabetes</h4>
                <p>
                  Curabitur gravida arcu ac tortor dignissim convallis. Volutpat
                  commodo sed egestas egestas fringilla phasellus. Cras sed
                  felis eget velit aliquet sagittis. Neque gravida in fermentum
                  et sollicitudin ac orci phasellus egestas. Nibh venenatis cras
                  sed felis eget velit aliquet sagittis. Ullamcorper sit amet
                  risus nullam eget felis eget. Maecenas volutpat blandit
                  aliquam etiam erat velit. Posuere sollicitudin aliquam
                  ultrices sagittis orci. Placerat in egestas erat imperdiet sed
                  euismod nisi. Mus mauris vitae ultricies leo integer malesuada
                  nunc vel. Dui accumsan sit amet nulla facilisi morbi tempus
                  iaculis. Nunc non blandit massa enim nec dui. Pulvinar etiam
                  non quam lacus suspendisse faucibus interdum. Neque volutpat
                  ac tincidunt vitae. Diam quis enim lobortis scelerisque
                  fermentum dui faucibus in ornare. Adipiscing tristique risus
                  nec feugiat in.
                </p>
              </div>
              <div className="btn-holder">
                <button type="button" className="btn btn-warning read-more">
                  Read More...
                </button>
              </div>
            </div>
            <div className="col pop">
              <div className="col-img">
                <img
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"
                  alt="img"
                />
              </div>
              <div className="col-content">
                <h4 className="col-title">Overweight and Obesity</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="btn-holder">
                <button type="button" className="btn btn-warning read-more">
                  Read More...
                </button>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section id="bottom-content">
          <ContactUs />
        </section>
      </div>
    );
  }
}

export default ContentWrapperComponent;
