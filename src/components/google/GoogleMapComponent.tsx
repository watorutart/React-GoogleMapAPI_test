import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: "100vh",
    height: "100vw"
};

const center = {
    lat: 35.69575,
    lng: 139.77521,
}

export const GoogleMapComponent = () => {
  return (
    <LoadScript libraries={["places"]} googleMapsApiKey="AIzaSyDfLGc9Z11lwgM68TyBMxYWXtLQCnTxSjw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  );
};
