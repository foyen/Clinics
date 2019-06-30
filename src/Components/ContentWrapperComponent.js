import React from "react";
import { CONSTANTS } from "../utils/Constants.js";
import { ContactUsComponent } from "../Components/ContactUsFormComponent.js";
import { ZipForm} from "./ZipForm";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/ContentWrapper.css";


export class ContentWrapperComponent extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div id="content-wrapper" >
          <section id="top-content"  >
            <div id="main-picture"  >
              <div class="container">
                <h1 id="main-title">Title Goes Here</h1>
                <h3> Curabitur gravida arcu ac tortor dignissim convallis</h3>
                <div id="zip-search">
                <ZipForm></ZipForm>
              </div>
              <div id="summary">
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
                <button class="btn btn-warning tell-more">Tell Me More</button>
              </div>
            </div>
          </section>
          <section id="middle-content">
            <div className="row justify-content-md-center">
              <div className="col pop">
                <div className="col-img" >
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"></img>
                </div>
                <div className="col-content">
                <h4 className="col-title">commodo sed egestas</h4>
                <p> Curabitur gravida arcu ac tortor dignissim convallis. Volutpat
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
                <div className="col-img" >
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"></img>
                </div>
                <div className="col-content">
                <h4 className="col-title">egestas fringilla phasellus</h4>
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
              <div className="col-img" >
              <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"></img>
                </div>
                <div className="col-content">
                <h4 className="col-title">esse cillum dolore</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
          <hr></hr>
          <section id="bottom-content" >
            <h3>Contact Us</h3>
            <ContactUsComponent />
          </section>
      </div>
    );
  }
}

export default ContentWrapperComponent;
