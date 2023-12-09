import React, { useEffect, useState } from "react";
import { useLocationContext } from "../context/positionContext"

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

const Mapbox = (props) => {
  const { currentLocation, setStart } = useLocationContext();

  mapboxgl.accessToken = 'pk.eyJ1IjoiZGltZW50aW8iLCJhIjoiY2xhMngzZmEyMDRtdDN2bW93MjYyY2hvbSJ9.lBP2u-C8BEgug7_ye16y2g';
  useEffect(() => {
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: currentLocation, // starting position [lng, lat]
    zoom: 12, // starting zoom
  });

  map.on('load', function () {
    // gets current location
    // navigator.geolocation.getCurrentPosition(startingPosHandler);
  });

  })

  return (
    <div className="App">
      <head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css' rel='stylesheet' />
      </head>
      <div className="center map-container">
        <div id='map'></div>
      </div>
      
    </div>
  );
};

export default Mapbox;
