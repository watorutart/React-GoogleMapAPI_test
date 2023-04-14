import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useSearch } from "./hooks/useSearch";
import { ForTest } from "./hooks/ForTest";
import { LatLng } from "./types/LatLng";
import { GeocoderTest } from "./components/google/GeocoderTest";

const mapStyles = {
  height: "500px",
  width: "500px",
};

export default function App() {
  const ref = useRef(null);
  const [map, setMap] = useState();

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
      <input type="text" value={inputText} onChange={onChangeText} placeholder="場所の名前で検索" />
      <button onClick={() => onClickSearch(inputText)}>検索</button>
      <button onClick={onClickClear}>入力クリア</button>
      <button onClick={onClickReset}>地図リセット</button>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={latLng}>
        <Marker position={latLng}/>
      </GoogleMap>
    </>
  );
}
