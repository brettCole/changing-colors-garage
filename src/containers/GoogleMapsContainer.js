import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';

// TODO: fix container so that footer shows below on LocationPage container

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }


  render() {

    const style = {
      width: '100vw',
      height: '75vh',
      // 'marginLeft': 'auto',
      // 'marginRight': 'auto',
    }

    return (
      <div style={{display: 'block'}}>
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClicked }
        zoom = { 14 }
        initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
      >
        <Marker 
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 39.648209, lng: -75.711185 }}
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow 
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          {/* <Paper> */}
            <div className="card-container">
            {/* <Typography  */}
            <p className="description">
              variant = 'headline'
              component = 'h4'
            >
              Changing Colors Garage
            {/* </Typography> */}
            </p>
            <p className="description">
            {/* <Typography */}
              component = 'p'
            >
              98G Albe Dr
              Newark, DE 19702 <br />
              302-293-8627
            {/* </Typography> */}
            </p>
            </div>
          {/* </Paper>  */}
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  api: (process.env.REACT_APP_GOOGLE_API_KEY)
})(GoogleMapsContainer)