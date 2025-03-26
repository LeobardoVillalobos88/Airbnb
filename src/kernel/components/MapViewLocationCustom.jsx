import React, { useState, useEffect } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

export default function MapViewLocationCustom() {
  const [location, setLocation] = useState(null);

  let subscription;

    const startTracking = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso de ubicación denegado');
        return;
      }

      subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (loc) => {
          setLocation(loc.coords);
          cosole.log("MapViewLocationCustom ",loc.coords);
        }
      );
    };

  useEffect(() => {

    startTracking();

    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {
        location && (
          <MapView
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        ZoomEnabled={true}
        scrollEnabled={true}
        zoomControlEnabled={true}
        style={{width:'95%', height: 384}}
      >
      <Marker
        key={location.latitude}
        coordinate={{latitude: location.latitude, longitude: location.longitude}}
        title={"Ubicación actual"}
        description={"Ubicacion actual del usuario"}
      />
      </MapView>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

