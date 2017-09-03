import React from 'react';
import GoogleMapReact from 'google-map-react';
import {
  DEFAULT_LAT as lat,
  DEFAULT_LNG as lng,
  DEFAULT_ZOOM as defaultZoom,
  GOOGLE_MAPS_API_KEY as key,
  GOOGLE_MAPS_LANG as language
} from '../constants';

export default class Map extends React.Component {
  static defaultProps = {
    defaultCenter: {lat, lng},
    defaultZoom
  }

  render () {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key,language}}
        {...this.props}
      >
      </GoogleMapReact>
    );
  }
}
