// @flow
import React from 'react';
import './styles.css';
import {STATION_COLOR as color} from '../constants';

type Props = {
  color: string
};

const Marker = ({color}: Props): React$Element<any> => (
  <span className='Marker' style={{borderColor: color}}></span>
);

Marker.defaultProps = {color};

export default Marker;
