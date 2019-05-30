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
      zipCode: new Number(),
      makers: [],
      clinics: []
    };
  }
  CreateClient = () => {};
  callback = (result, status) => {

        // let newArray = result.map(x => {
        //     x = new this.props.google.maps.Marker({
        //         map: this.props.google.maps.Map,
        //         position: {lat: 33.4484, lng: -112.0740}
        //     })
        // });

        // let x = []
        // x.push(new this.props.google.maps.Marker({
        //     map: this.props.google.maps.Map,
        //     position: {lat: 33.4484, lng: -112.0740}}));

        // let y = new this.props.google.maps.Marker({
        //     map: this.props.google.maps.Map,
        //     position: {lat: 33.4484, lng: -112.0740}});

        //     let x = <Marker position={{lat: 33.4484, lng: 33.4484221}} />

        // console.log(x);


      // result      // new Result
      // [{1},{2},{3}] -> [{1,2}, {{3,4}}, {5,6}]
      
    this.setState({
      places: result,
    });
    // result.forEach(element => {
    //    this.state.makers.push( new this.props.google.maps.Marker({
    //     map: this.props.google.maps.Map,
    //     draggable: true,
    //     position: {lat: 40.714, lng: -74.006}
    //   }))
    // });
    console.log(this.state.places);
    console.log(this.state.makers);
    //console.log(this.state.places[0].geometry.location.lat());
    //console.log(this.state.places[0].geometry.location.lng());
  };

  ApiCall = (mapProps, map) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    service.textSearch(
      {
        location: new google.maps.LatLng(
          CONSTANTS.phoenixCoordinates.lat,
          CONSTANTS.phoenixCoordinates.lng
        ),
        radius: "500",
        query: "clinic"
      },
      this.callback
    );
  };
  componentDidMount() {}
  render() {
    const style = {
      height: "685px",
      position: "initial !important",
      borderRadius: "5px",
      margin: "0px"
    };
    // placesService.searchPlaces("85296")

    // placesService.searchPlaces({
    //     input:"85295",
    //     inputtype:"textquery",
    //     fields:["photos","formatted_address","name","rating"]

    // }).then((message) =>{
    //     console.log(message);
    // })

    // {this.state.places.map((place) =>{
    //     return (<Marker name={place.name} position={{lat:place.geometry.location.lat, lng:place.geometry.location.lng}}></Marker>)
    // })}

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

                <button className="btn btn-primary col col-md-4">
                  
                  Search
                </button>
              </div>
            </div>
            <div>
                
              <div className="place">
                <div className="place-name">Name Goes Here</div>
                <hr />
                <div className="row">
                  <div className="col offset-md-1 col-md-2 place-label">
                    {" "}
                    <b>Phone:</b>
                  </div>{" "}
                  <div className="col col-md-8 place-text">480-999-999</div>
                </div>
                <div className="row"></div>
                  <div className="col offset-md-1 col-2 place-label">
                    {" "}
                    <b>Address:</b>
                  </div>{" "}
                  <div className="col col-md-8 place-text">
                    ssss ssssss ssssss ssssssssss sssss sssssssss sssss ssssssss
                    ssssssss sssssssss sssss sssssssssss
                  </div>
                  <div className="row">
                  <div className="col offset-md-1 col-2 place-label">
                    {" "}
                    <b>Distance:</b>
                  </div>{" "}
                  <div className="col col-md-8 place-text"> 0.5 mi</div>
                </div>
                </div>

              </div>
            </div>
          </div>
          <div className="map-section col col-6">
            <Map
              style={style}
              google={this.props.google}
              onReady={this.ApiCall}
              initialCenter={CONSTANTS.phoenixCoordinates}
              zoom={10}
            >
                {this.state.places === null ? null : this.state.places.map(x => {
                    return (<Marker name="Fuck me" position={{lat:x.geometry.location.lat(), lng: x.geometry.location.lng()}} />)
                })}
            </Map>
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
