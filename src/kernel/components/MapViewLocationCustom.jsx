import React, { useState, useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";

export default function MapViewLocationCustom() {
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const locationSubscription = useRef(null);

  const startTracking = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permiso de ubicación denegado");
      return;
    }

    locationSubscription.current = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (loc) => {
        const newCoords = {
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        };

        setCurrentLocation(newCoords);
        setLocations((prevLocations) => [...prevLocations, newCoords]); // Agregar nueva ubicación al historial
        console.log("Nueva ubicación:", newCoords);
      }
    );
  };

  useEffect(() => {
    startTracking();
    return () => {
      if (locationSubscription.current) {
        locationSubscription.current.remove();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      {currentLocation && (
        <MapView
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={styles.map}
        >
          {locations.map((loc, index) => (
            <Marker
              key={index}
              coordinate={loc}
              title={`Punto ${index + 1}`}
              description={"Ubicación registrada"}
              pinColor={index === locations.length - 1 ? "red" : "blue"}
            />
          ))}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: "95%",
    height: 400,
  },
});