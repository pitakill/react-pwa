// @flow
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {
  DEFAULT_LAT as lat,
  DEFAULT_LNG as lng,
  DEFAULT_ZOOM as zoom,
  GOOGLE_MAPS_API_KEY as key,
  GOOGLE_MAPS_LANG as language,
  USER_COLOR as color
} from '../constants';
import Marker from '../Marker';

type Props = {
  center?: {
    lat: number,
    lng: number
  },
  defaultCenter: {
    lat: number,
    lng: number
  },
  stations: Array<{
    address: string,
    addressNumber: string,
    altitude: string,
    districtCode: string,
    districtName: string,
    id: number,
    location: {
      lat: number,
      lon: number
    },
    name: string,
    nearbyStations: Array<number>,
    stationType: string,
    zipCode: string
  }>,
  user?: {
    lat?: number,
    lng?: number
  },
  zoom: number
};

export default class Map extends React.Component<Props> {
  static defaultProps = {
    defaultCenter: {lat, lng},
    user: {
      lat: 0,
      lng: 0
    },
    zoom
  }

  drawStations(): Array<React$Element<any>> {
    const {stations} = this.props;

    return stations.map((station, key) => {
      const {location: {lat, lon: lng}} = station;
      return <Marker {...{key, lat, lng}}></Marker>
    });
  }

  render (): React$Element<GoogleMapReact> {
    const {defaultCenter, center, user, zoom} = this.props;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key,language}}
        {...{defaultCenter, center, zoom}}
      >
        <Marker {...{...user, color}}/>
        {this.props && this.props.stations ? this.drawStations() : null}
      </GoogleMapReact>
    );
  }
}
