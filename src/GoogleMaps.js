import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const styles = [
    {
      "elementType": "labels",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "visibility": "simplified"
        },
        {
          "weight": 8
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#0fbda0"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#616161"
        },
        {
          "weight": 1
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#616161"
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#1d1d1d"
        },
        {
          "weight": 1
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
    lat: -38.165, 
    lng: 145.923
};

function GoogleMaps() {
  return (
    <LoadScript
      googleMapsApiKey= "AIzaSyAOf87PrnZHzGwqBN74ZXrvidWnKWhLD5o"
    >
      <GoogleMap
          options={{
            streetViewControl: false,
            draggable: true,
            zoomControlOptions: { position: 9 },
            keyboardShortcuts: false, 
            scaleControl: true, 
            scrollwheel: true, 
            styles: styles
        }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
      >
    <Marker
        position={{ lat: -38.165, lng: 145.923 }}
        icon={require("./Images/MapTag.png")}
    />
      <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMaps)