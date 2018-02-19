import React from 'react';
import Info from '../Info';
import Map from '../Map';
import {
  BASE_URL_STATIONS,
  //BASE_URL_STATIONS_STATUS,
  BASE_URL_TOKEN,
  DETAIL_ZOOM as zoom,
  DEFAULT_LAT as lat,
  DEFAULT_LNG as lng,
  DEFAULT_ZOOM as defaultZoom
} from '../constants';
import './styles.css';

import {
  actions,
  store
} from '../redux';
import {bindActionCreators} from 'redux';
import {connect, Provider} from 'react-redux';

const {error} = console;

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

type State = {
  center: {
    lat: number,
    lng: number
  },
  positionId: number,
  stations: Array<Station>,
  token: string,
  user: {
    lat?: number,
    lng?: number
  },
  zoom: number
};

type Props = {
  actions: {
    test: Function,
    setStations: Function,
    testAsync: Function
  }
};

class App extends React.Component<Props, State> {
  static State = {
    center: {lat, lng},
    positionId: undefined,
    stations: undefined,
    token: undefined,
    zoom: defaultZoom
  };

  async dispatchAPICalls(): Promise<fetch> {
    await this.getGeolocation();
    await this.getToken();
    await this.getStations();
  }

  async getStations(): Promise<fetch> {
    try {
      const {token} = this.state;
      const response = await fetch(`${BASE_URL_STATIONS}${token}`);
      const {stations} = await response.json();
      this.props.actions.setStations(stations)
      //this.props.actions.testAsync()
    } catch(e) {
      error(e);
    }
  }

  async getToken (): Promise<fetch> {
    try {
      const response = await fetch(`${BASE_URL_TOKEN}&grant_type=client_credentials`);
      const {access_token: token} = await response.json();
      this.setState({token});
    } catch(e) {
      error(e);
    }
  }

  getGeolocation (): void {
    const positionId = navigator.geolocation.watchPosition(
      position => {
        const {coords: {latitude: lat, longitude: lng}} = position;
        const center = {lat, lng};
        this.setState({center, user: center, zoom});
      },
      e => {
        // This is basic
        // Use a better handle of the error!
        error(e);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
      }
    );

    this.setState({positionId});
  }

  componentDidMount(): void {
    this.dispatchAPICalls();
    this.props.actions.testAsync()
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.state.positionId);
  }

  printInfo(stations: Array<Station>) {
    return stations.map((station, key) => <Info {...{key, ...station}}/>);
  }

  render (): React$Element<*> {
    return (
      <div className='App-container'>
      {
        Boolean(this.props) &&
        Boolean(this.props.stations) &&
        Boolean(this.props.stations.stations) ?
          this.printInfo(this.props.stations.stations) :
          null
      }
        <Map
          stations={this.props.stations.stations}
          {...this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({...state});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Wrapper = () =>
  <Provider {...{store}}>
    <AppConnected/>
  </Provider>

export default Wrapper;
