import React, { useState } from "react";
import { GoogleMap } from "@react-google-maps/api";

type Props = {
  searchKey: string;
};

export const useSearch = (props: Props) => {
  const { searchKey } = props;
  
  const [map, setMap] = useState<google.maps.Map | null>(null);

  var request = {
    query: searchKey,
    fields: ["name", "geometry"],
  };

  // const service = new google.maps.places.PlacesService(map);

  // service.findPlaceFromQuery(request, function (results, status) {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     console.log(results);
  //     console.log(results![0].geometry?.location);
  //     return results;
  //   } else {
  //     return null;
  //   }
  // });
};
