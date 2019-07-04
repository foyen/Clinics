import React from "react";
import MapContainer from "./MapContainer"
import { ZipForm} from "./ZipForm";
import { CONSTANTS } from "../utils/Constants.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

export class ClinicSearchWrapper extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      places: [],
      zipCode: this.props.match.params.zipCode || "85285",
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
    });
    console.log(result)
};

setCenter =(result, status) => {
  if(result.length >0){
    setTimeout(()=>{
      this.state.map.setCenter({lat:result[0].geometry.location.lat() ,
                                lng:result[0].geometry.location.lng()})

      this.state.service.textSearch(
        {
          location: { lat: result[0].geometry.location.lat(), lng: result[0].geometry.location.lng() },
          rankby: "distance",
          radius: "1000",
          maxResults: 50,
          query: "clinic " + this.state.zipCode,
        },
        this.callback
      )
    } , 1500)

  }else{
    //error message
  } 
}

  apiCall = (mapProps, map) => {
    
    if (this.state.service === null) {
      this.setState({
          service: new window.google.maps.places.PlacesService(map),
          map: map
      });
    }
    
    console.log(this.state.zipCode)
    this.state.service.textSearch(
      {
          location: CONSTANTS.phoenixCoordinates,
          query: this.state.zipCode,
      },
      this.setCenter
    )
  }; 

onMarkerClick = (props, marker, e) => {
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
}
searchClinics = (newZipCode) => {

  this.setState({
    prevZipCode: this.state.zipCode,
    zipCode: newZipCode
  }, function() {

  if(this.state.zipCode !== this.state.prevZipCode) {
    this.apiCall(null, null)
  }
  });
}

render() {
  return (
    <div className="search">
          <div id="map" className="map-section">
          <MapContainer 
            ApiCall={this.apiCall} 
            zipCode={this.state.zipCode}
            places={this.state.places}>
          </MapContainer>
        </div>
      <div  className="row">
        <div className="places-section col-sm-12 col-md-5 col-lg-3">
          <ZipForm 
            zipCode={this.state.zipCode}
            search={this.searchClinics}>
          </ZipForm>
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
                        480-329-9999
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

export default ClinicSearchWrapper;
