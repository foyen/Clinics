import React from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { CONSTANTS } from "../utils/Constants.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      places: null,
      zipCode: '',
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      map: null,
      service: null
    };
  }
  CreateClient = () => {};
  callback = (result, status) => {
      
    this.setState({
      places: result,
    });
    console.log(this.state.places);
  };

  onChange = event => {
    console.log(this.state.zipCode)
    console.log(event.target.value)
    this.setState ({
      zipCode: event.target.value
    })
    console.log(this.state.zipCode)
  }

  ApiCall = (mapProps, map) => {
    var service
    if (this.state.service === null) {
      this.setState({
        service: new window.google.maps.places.PlacesService(map),
        map: map
      });
    } else {
      this.setState({
        map: map,
      });
    }
    
    const { google } =  window.google;
    this.state.service.textSearch(
      {
        location: new window.google.maps.LatLng(
          CONSTANTS.phoenixCoordinates.lat,
          CONSTANTS.phoenixCoordinates.lng
        ),
        radius: "1000",
        query: "clinic "+ this.state.zipCode
      },
      this.callback
    );
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  componentDidMount() {}
  render() {
    const style = {
      height: "685px",
      position: "initial !important",
      borderRadius: "5px",
      margin: "0px"
    };

    return (
      <div className="search ">
        <div className="row">
          <div className="places-section col col-3 ">
            <div className="zipCode">
              <div className="row">
                <div className="col col-md-8">
                  <input
                    name="zipCode"
                    type="number"
                    className="form-control "
                    placeholder="Zip Code"
                    onChange={this.onChange}
                    value={this.state.zipCode}
                  />
                </div>

                <button onClick={this.ApiCall}  className="btn btn-primary col col-md-4">
                  Search
                </button>
              </div>
            </div>
            <div>
            {true && this.state.places === null ? null : this.state.places.map(x => {
                return (
                    <div className="place">
                    <div className="place-name">{x.name}</div>
                    <hr />
                    <div className="row">
                    <div className="col offset-md-1 col-md-2 place-label">
                        <b>Address:</b>
                      </div>
                      <div className="col col-md-8 place-text">
                        {x.formatted_address}
                      </div>
                    </div>
                      <div className="row">
                      <div className="col offset-md-1 col-md-2 place-label">
                        <b>Distance:</b>
                      </div>
                      <div className="col col-md-8 place-text"> 0.5 mi</div>
                    </div>
                    </div>
                    
                )
            })}

            
              </div>
            </div>
          
          <div id="map" className="map-section col col-6">
            <Map
              style={style}
              google={window.google}
              onReady={this.ApiCall}
              initialCenter={CONSTANTS.phoenixCoordinates}
              zoom={10}
            >
                {this.state.places === null ? null : this.state.places.map(x => {
                    return (
                    <Marker key={x.id} title={x.name} 
                    onClick={this.state.onMarkerClick} 
                    animation={this.props.google.maps.Animation.DROP} 
                    position={
                      { lat:x.geometry.location.lat(),
                        lng: x.geometry.location.lng()}
                      } />
                        )
                })}
            </Map>
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
