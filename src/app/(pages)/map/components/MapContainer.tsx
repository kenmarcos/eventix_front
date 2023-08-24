"use client";

import { useEffect, useState } from "react";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  maxHeight: "100%",
};

const MapContainer = () => {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });

  const markers = [
    { lat: -19.899613, lng: -43.9364789 },
    { lat: -19.89965, lng: -43.9364789 },
    { lat: -19.89919, lng: -43.937981 },
  ];

  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!mapsApiKey) {
    throw new Error("Maps API key not found");
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapsApiKey,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Erro ao buscar localização");
        }
      );
    }
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {/* Child components, such as markers, info windows, etc. */}
      {markers.map((marker, index) => (
        <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
      ))}
    </GoogleMap>
  ) : (
    <p>Carregando...</p>
  );
};

export default MapContainer;
