import React, { ReactNode } from "react";
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export const SampleSearch = () => {
  //   const {children} = props;

  let map: google.maps.Map;
  let service: google.maps.places.PlacesService;
  let infowindow: google.maps.InfoWindow;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDfLGc9Z11lwgM68TyBMxYWXtLQCnTxSjw",
    libraries: ["places"],
  });

  const [gMap, setGMap] = React.useState(null);

  // ★googleAPI関数を外に出す or 「GoogleAPIを読み込む何か」より後じゃないといけない;
  const onClickTest = () => {
    console.log("func: onClickTest");

    const sydney = new window.google.maps.LatLng(-33.867, 151.195);
    console.log(sydney);

    infowindow = new google.maps.InfoWindow();
    console.log(infowindow);

    map = new google.maps.Map(document.getElementById("root") as HTMLElement, {
      center: sydney,
      zoom: 15,
    });

    var request = {
      query: "東京タワー",
      fields: ["name", "geometry"],
    };

    service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        console.log(results![0].geometry?.location);
        console.log(results![0].geometry?.location?.lat());
        console.log(results![0].geometry?.location?.lng());
        map.setCenter(results![0].geometry!.location!);
      }
    });
  };

  return (
    <>
      <p>test</p>
      <button onClick={onClickTest}>実行</button>
    </>
  );
};
