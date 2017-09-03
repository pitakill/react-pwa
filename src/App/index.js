// @flow
import React from 'react';
import Map from '../Map';
import {
  DETAIL_ZOOM as zoom,
  DEFAULT_LAT as lat,
  DEFAULT_LNG as lng,
  DEFAULT_ZOOM as defaultZoom
} from '../constants';
import './styles.css';

type State = {
  center: {
    lat: number,
    lng: number
  },
  zoom: number
};

export default class App extends React.Component<{}, State> {
  static State = {
    center: {lat, lng},
    zoom: defaultZoom
  };

  getGeolocation (): void {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {coords: {latitude: lat, longitude: lng}} = position;
        const center = {lat, lng};
        this.setState({center, zoom});
      },
      error => {
        // This is basic
        // Use a better handle of the error!
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
      }
    );
  }

  componentDidMount(): void {
    this.getGeolocation();
  }

  render (): React$Element<*> {
    return (
      <div className='App-container'>
        <Map {...this.state}/>
      </div>
    );
  }
}
