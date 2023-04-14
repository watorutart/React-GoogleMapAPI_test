import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { LatLng } from "./types/LatLng";
import { PrimaryButton } from "./components/atoms/PrimaryButton";
import { InputText } from "./components/atoms/InputText";

const mapStyles = {
  height: "500px",
  width: "500px",
};

export default function App() {
  const defaultCenter: LatLng = {
    lat: 41.3851,
    lng: 2.1734,
  };

  const [latLng, setLatLng] = useState<LatLng>(defaultCenter);
  const [inputText, setInputText] = useState("");

  const onChangeText = (e: any) => {
    setInputText(e.target.value);
  };

  const onClickSearch = (inputText: string) => {
    const geocoder = new google.maps.Geocoder();
    let retLatLng: LatLng = { lat: 0, lng: 0 };
    
    geocoder.geocode({ address: inputText }, (results, status) => {
      if (status == "OK") {
        console.log("success");
        console.log(results);
        retLatLng = {
          lat: results![0].geometry.location.lat(),
          lng: results![0].geometry.location.lng(),
        };
        setLatLng(retLatLng);
      } else {
          console.log("failed");
          alert("候補が見つかりませんでした");
      }
    })
  };

  const onClickClear = () => {
    setInputText("");
  }

  const onClickReset = () => {
    setLatLng(defaultCenter);
  };

  return (
    <>
      <InputText value={inputText} placeholder="場所を検索" onChange={onChangeText} />
      <PrimaryButton bgColor="teal" onClick={() => onClickSearch(inputText)}>検索</PrimaryButton>
      <PrimaryButton bgColor="gray" onClick={onClickClear}>入力クリア</PrimaryButton>
      {/* <PrimaryButton bgColor="red" onClick={onClickReset}>地図リセット</PrimaryButton> */}
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={latLng}>
        <Marker position={latLng}/>
      </GoogleMap>
    </>
  );
}
