import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  width: '900px',
  height: '500px',
};

export class MapContainer extends Component {
  render() {
    return (
      <Map 
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 10.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
})(MapContainer);