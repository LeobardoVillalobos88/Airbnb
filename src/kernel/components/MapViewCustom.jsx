import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapViewCustom() {
  return (
    <View style={styles.container}>
      <MapView
  initialRegion={{
    latitude: 18.85053721727243,
    longitude: -99.20064967336313,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }}
    ZoomEnabled={true}
    scrollEnabled={true}
    style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '95%',
    height: 384,
  },
});

