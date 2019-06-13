import React from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { CONSTANTS } from "../utils/Constants.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

/*
var zipForm = React.createClass({
    
  render() {
    getInitialState = () => {
      return {zipCode: ""};
    },
    onChange = e =>{
      this.setState({zipCode:e.target.value})
    },
    this.setState({newPost: ""})

    return (
    <div>
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
          <button onClick={this.ApiCall} className="btn btn-primary col col-md-4">
            Search
              </button>
        </div>
      </div>
    </div>
    )
  }
})
*/
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      places: [],
      zipCode: '85295',
      prevZipCode:"default",
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      map: null,
      service: null
    };
  }

  


callback = (result, status) => {

    this.setState({
        places: result, 
        prevZipCode: this.state.zipCode
    });
    console.log(result)
};

setCenter =(result, status) =>{
    console.log( result.length)
    if(result.length >0){
      setTimeout(()=>{
        this.state.map.setCenter({lat:result[0].geometry.location.lat() ,
                                  lng:result[0].geometry.location.lng()})
      } , 1000)
    }
    
}

onChange = event => { 
  if(event.target.value <= 99999){
    this.setState({
        zipCode: event.target.value
      })
  }
  
  
}

ApiCall = (mapProps, map) => {

  if (this.state.service === null) {
    this.setState({
        service: new window.google.maps.places.PlacesService(map),
        map: map
    });
}
  
  this.state.service.textSearch(
    {
        location:CONSTANTS.phoenixCoordinates,
        rankby:"distance",
        radius: "1000",
        maxResults:50,
        query: "clinic Arizona" + this.state.zipCode,
    },
    this.callback
  )

  this.state.service.textSearch(
    {
        location:CONSTANTS.phoenixCoordinates,
        query: this.state.zipCode,
    },
    this.setCenter
  )};

onMarkerClick = (props, marker, e) => {
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
}

componentDidMount() { }
render() {
  const style = {
    height: "100%",
    zIndex: "-0",
    borderRadius: "5px",
    margin: "0px"
  };

  return (
    <div className="search">
          <div id="map" className="map-section">
          <Map
            style={style}
            google={window.google}
            onReady={this.ApiCall}
            initialCenter={CONSTANTS.phoenixCoordinates}
            zoom={13}
          >
            {this.state.places === null ? null : this.state.places.map(x => {
              return (
                <Marker key={x.id} title={x.name}
                  onClick={this.state.onMarkerClick}
                  animation={this.props.google.maps.Animation.DROP}
                  position={
                    {
                      lat: x.geometry.location.lat(),
                      lng: x.geometry.location.lng()
                    }
                  } />
              )
            })}
          </Map>
        </div>
      <div  className="row">
        <div className="places-section col-sm-6 col-md-3">
          <div className="zipCode">
            <div className="row">
              <div className="col col-md-8">
                <input
                  name="zipCode"
                  type="number"
                  className="form-control"
                  placeholder="Zip Code"
                  onChange={this.onChange}
                  value={this.state.zipCode}
                />
              </div>
            <button onClick={this.ApiCall} className="btn btn-primary col col-lg-4">
                Search
            </button>
            </div>
          </div>
          <div className="places">
          {true && this.state.places === null ? null : this.state.places.map((x, i) => {
              return (
                <div key={x.id} className="place-wrapper">
                                <div className="place">
                    <div className="place-name">
                        <b>{x.name}</b>
                    </div>
                    <div className="formatted-address">
                            {x.formatted_address}
                    </div>
                    <div className="formatted-address">
                        480-329-0014
                    </div>
                    <div className="formatted-address">
                        .05 mi
                    </div>
                </div>
                </div>
                )
            })}
          </div>
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
