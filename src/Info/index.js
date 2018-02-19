import React from 'react';

type Station = {
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
};

export default ({address}): Station => <div>{address}</div>;
