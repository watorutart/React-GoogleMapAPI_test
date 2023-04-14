import React from "react";
import { LatLng } from "../types/LatLng";

export const ForTest = (text: string): LatLng => {
  console.log("func: ForTest");
  console.log(text);
  let testLatLng: LatLng = {lat: 0, lng: 0};

  if (text !== "") {
    testLatLng = {
      lat: 35.69575,
      lng: 139.77521,
    };
  } else {
    testLatLng = {
      lat: 30.69575,
      lng: 120.77521,
    };
  }
  return testLatLng;
};
