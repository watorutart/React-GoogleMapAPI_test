import React from "react";
import { GoogleMap } from "@react-google-maps/api";
import { LatLng } from "../../types/LatLng";

type Props = {
  setLatLng: () => void;
};

export const GeocoderTest = (props: Props) => {
  const { setLatLng } = props;
  let retLatLng: LatLng = { lat: 0, lng: 0 };
  console.log("func: GeocoderTest");
  const geocoder = new google.maps.Geocoder();
  const inputAddress = "東京タワー";

  geocoder.geocode({ address: inputAddress }, (results, status) => {
    if (status == "OK") {
      console.log("success");
      retLatLng = {
        lat: results![0].geometry.location.lat(),
        lng: results![0].geometry.location.lng(),
      };
    } else {
      console.log("failed");
      retLatLng = {
        lat: 50,
        lng: 50,
      };
    }
  });
};
