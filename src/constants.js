// Ecobici
const PROXY = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = `${PROXY}https://pubsbapi.smartbike.com`;
const CLIENT_ID = '1098_52s53als5zgoos84ss0k0w0c4wwws04os8og4ksk000kg4soc4';
const CLIENT_SECRET = '3h2zncw5c5q8gck48cw0cwswwcwggg880ws48w08wk0sc00w8g';
export const BASE_URL_STATIONS = `${BASE_URL}/api/v1/stations.json?access_token=`;
export const BASE_URL_STATIONS_STATUS = `${BASE_URL}/api/v1/stations/status.json?access_token=`
export const BASE_URL_TOKEN = `${BASE_URL}/oauth/v2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
// Google Maps
export const DEFAULT_LAT = 19.4229262;
export const DEFAULT_LNG = -99.1351441;
export const DEFAULT_ZOOM = 13;
export const DETAIL_ZOOM = 17;
export const GOOGLE_MAPS_API_KEY = 'AIzaSyBsuyux4fnHenyL-xSnEZTrNwkw_GsweeA';
export const GOOGLE_MAPS_LANG = 'es';
// UI
export const USER_COLOR = '#4099ff';
export const STATION_COLOR = 'peru';
