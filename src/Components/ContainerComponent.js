import React from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { CONSTANTS } from "../utils/Constants.js";
import placesService from  "../Services/PlacesServices.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(window.google)
    this.state = {
      zipCode: new Number(),
      maker: new Marker(),
      clinics: []
    };
  }

  render() {
    const style = {
        height: "685px",
        position: "initial !important",
        borderRadius: "5px",
        margin:"0px"
    };

    placesService.searchPlaces({
        input:"85295",
        inputtype:"textquery",
        fields:["photos","formatted_address","name","rating"]

    }).then((message) =>{
        console.log(message);
    })

    return (
      <div className="search ">
      <div className="row">
      <div className="places-section col col-3 ">
          <div className="zipCode">
            <div className="row">
                <div className="col col-md-8">
                <input
                    type="number"
                    className="form-control "
                    placeholder="Zip Code"
                />
                </div>

            <button className="btn btn-primary col col-md-4"> Search</button>
            </div>
        </div>
        <div>
        <div className="place">    
            <div className="place-name">Name Goes Here</div>
            <hr></hr>
            <div className="row">
                <div className="col offset-md-1 col-md-2 place-label"> <b>Phone:</b></div> <div className ="col col-md-8 place-text">480-999-999</div>
                </div>
                <div className="row">
                    <div className="col offset-md-1 col-2 place-label">  <b>Address:</b></div> <div className ="col col-md-8 place-text">ssss ssssss ssssss ssssssssss sssss sssssssss sssss ssssssss ssssssss sssssssss sssss sssssssssss</div>
                </div>
                <div className="row">
                    <div className="col offset-md-1 col-2 place-label">  <b>Distance:</b></div> <div className ="col col-md-8 place-text">    0.5 mi</div>
                </div>
            
        </div>        
        </div>
        </div>
        <div className="map-section col col-6">   
            <Map
                style={style}
                google={this.props.google}
                initialCenter={CONSTANTS.phoenixCoordinates}
                zoom={10}
            />
        </div>

      </div>

        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: CONSTANTS.apiKey,
  libraries: ["map", "places"],
  url: "https://maps.googleapis.com/maps/api/js"
})(MapContainer);
