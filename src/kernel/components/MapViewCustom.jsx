import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapViewCustom(props) {
  const {direction, latitudeDelta, longitudeDelta, width, height, name, description} = props;
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: direction.latitude || 20.897141046579925,
          longitude: direction.longitude || -99.2272682691106,
          latitudeDelta: latitudeDelta || 0.005,
          longitudeDelta: longitudeDelta || 0.005,
        }}
        ZoomEnabled={true}
        scrollEnabled={true}
        zoomControlEnabled={true}
        style={{width: width || '95%', height: height || 384}}
      >
      <Marker
        key={direction.latitude}
        coordinate={{latitude: direction.latitude, longitude: direction.longitude}}
        title={name}
        description={description}
      />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

