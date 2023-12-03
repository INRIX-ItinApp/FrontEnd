import React from "react";
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = (props) => {
  // const Map = ReactMapboxGl({
  //   accessToken:
  //     "pk.eyJ1IjoiZGltZW50aW8iLCJhIjoiY2xhMngzZmEyMDRtdDN2bW93MjYyY2hvbSJ9.lBP2u-C8BEgug7_ye16y2g",
  // });

  return (
    <div className="App">
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      {/* <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map> */}
    </div>
  );
};

export default Mapbox;
