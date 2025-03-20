import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Image, AirbnbRating } from "@rneui/base";
import React, { useLayoutEffect } from 'react'
import PagerView from 'react-native-pager-view';
import { map } from 'lodash';
import MapViewCustom from '../../../kernel/components/MapViewCustom';
export default function DetailPlace(props) {
  const { place } = props.route.params;
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: place.name
    })
  }, [props.navigation])
  return (
    <View style={styles.container}>
      <ScrollView>
        <PagerView style={styles.pagerView} initialPage={0}>
          {map(place.images, (image, index) => {
            return (
              <View style={styles.page} key={index}>
                <Image source={{ uri: image }} style={{ width: '100%', height: "100%" }} resizeMode='cover' />
              </View>
            )
          })}
        </PagerView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>{place.name}</Text>
          <AirbnbRating
            count={5}
            defaultRating={place.rating / place.count}
            size={20}
            showRating={false}
            isDisabled={true}
          />
        </View>
        <Text style={{color:"gray", margin: 16}}>{place.description}</Text>
        <MapViewCustom 
        direction={place.direction}
          latitudeDelta={0.005}
          longitudeDelta={0.005}
          width={"90%"}
          height={320}
          name={place.name}
          description={place.description}
        />
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  pagerView: {
    height: 256,
  },
  page: {
    width: "100%",
    height: 256
  },
})