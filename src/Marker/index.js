// @flow
import React from 'react';
import './styles.css';
import {STATION_COLOR} from '../constants';

type Props = {
  color: string
};

export default ({color = STATION_COLOR}: Props): React$Element<any> => (
  <span className='Marker' style={{borderColor: color}}></span>
);
