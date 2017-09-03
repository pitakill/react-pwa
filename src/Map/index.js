// @flow
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {
  DEFAULT_LAT as lat,
  DEFAULT_LNG as lng,
  DEFAULT_ZOOM as zoom,
  GOOGLE_MAPS_API_KEY as key,
  GOOGLE_MAPS_LANG as language
} from '../constants';

type Props = {
  defaultCenter: {
    lat: number,
    lng: number
  },
  zoom: number
};

export default class Map extends React.Component<Props> {
  static defaultProps = {
    defaultCenter: {lat, lng},
    zoom
  }


  render (): React$Element<GoogleMapReact> {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key,language}}
        {...this.props}
      >
      </GoogleMapReact>
    );
  }
}
