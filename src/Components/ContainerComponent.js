import React, { PropTypes as T } from 'react'
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import { CONSTANTS } from '../utils/Constants.js';

 

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            selectedPlace: {
            name: "This is the Name"
            }

        }
    }

    render() {
        return (
          <Map google={this.props.google}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          
          zoom={14}>
     
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
     
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>
        )
    }
}
 
export default GoogleApiWrapper({
  apiKey: CONSTANTS.apiKey
})(MapContainer)

