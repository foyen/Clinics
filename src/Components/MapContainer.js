import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { CONSTANTS } from "../utils/Constants.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";


export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      map: null,
      service: null
    };
  }


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
    width:"100%",
    zIndex: "-0",
    borderRadius: "5px",
    margin: "0px"
  };

  return (
            <Map
                style={style}
                google={this.props.google}
                onReady={this.props.ApiCall}
                initialCenter={CONSTANTS.phoenixCoordinates}
                zoom={13}
            >
            {this.props.places === null ? null : this.props.places.map(x => {
                return (
                <Marker key={x.id} title={x.name}
                    onClick={this.state.onMarkerClick}
                    animation={this.props.google.maps.Animation.DROP}
                    position={
                    {
                        lat: x.geometry.location.lat(),
                        lng: x.geometry.location.lng()
                    }
            }/>
                )
            })}
            </Map>
    );
}
}

export default GoogleApiWrapper({
  apiKey: CONSTANTS.apiKey,
  v: "3",
  libraries: ["map", "places"],
  url: "https://maps.googleapis.com/maps/api/js"
})(MapContainer);
