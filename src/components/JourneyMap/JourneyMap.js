import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './JourneyMap.css';
import Marker from './Marker/Marker';

class JourneyMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className={`JourneyMap ${this.props.className}`}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAP_THINGIE_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default JourneyMap;
