import React from "react";
import { CONSTANTS } from "../utils/Constants.js";
import { ContactUsComponent } from "../Components/ContactUsFormComponent.js";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/ContentWrapper.css";

export class ContentWrapperComponent extends React.Component {
  componentDidMount() {
    //check current page so tabbed bar can be rendered.
  }

  render() {
    return (
      <div id="content-wrapper" className="clearfix" >
        <div id="main-column">
          <section id="top-content" className="pop"  >
            <div id="main-picture"   >
              <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg" ></img>
            </div>
            <div className="summary">
            <p>
              Curabitur gravida arcu ac tortor dignissim convallis. Volutpat
              commodo sed egestas egestas fringilla phasellus. Cras sed felis
              eget velit aliquet sagittis. Neque gravida in fermentum et
              sollicitudin ac orci phasellus egestas. Nibh venenatis cras sed
              felis eget velit aliquet sagittis. Ullamcorper sit amet risus
              nullam eget felis eget. Maecenas volutpat blandit aliquam etiam
              erat velit. Posuere sollicitudin aliquam ultrices sagittis orci.
              Placerat in egestas erat imperdiet sed euismod nisi. Mus mauris
              vitae ultricies leo integer malesuada nunc vel. Dui accumsan sit
              amet nulla facilisi morbi tempus iaculis. Nunc non blandit massa
              enim nec dui. Pulvinar etiam non quam lacus suspendisse faucibus
              interdum. Neque volutpat ac tincidunt vitae. Diam quis enim
              lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing
              tristique risus nec feugiat in.
            </p>
            </div>
          </section>
          <section id="middle-content" className="pop">
            <div className="row justify-content-md-center">
              <div className="col">
              <div className="col-img" >
                  <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"></img>
              </div>
                <div className="col-content">
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
                </div>
                <div className="btn-holder">
                  <button type="button" className="btn btn-warning">
                    Read More
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="col-img" >
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"></img>
                </div>
                <div className="col-content">
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
                </div>
                <div className="btn-holder">
                  <button type="button" className="btn btn-warning">
                    Read More
                  </button>
                </div>
              </div>
              <div className="col">
              <div className="col-img" >
              <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"></img>
                </div>
                <div className="col-content">
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
                  <button type="button" className="btn btn-warning">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section id="bottom-content" className="pop">
            <h3>Contact Us</h3>
            <ContactUsComponent />
          </section>
        </div>
        <div id="right-column" className="right pop" />
      </div>
    );
  }
}

export default ContentWrapperComponent;
