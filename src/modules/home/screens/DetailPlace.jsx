import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Image, AirbnbRating } from '@rneui/base';
import React, {useLayoutEffect} from 'react'
import PagerView from 'react-native-pager-view';
import {map} from "lodash";

export default function DetailPlace(props) {
    //VAMOS A RECIBIR DEL ROUTE EL ELEMENTO PLACE EL CUAL CONTENDRA TODAS SUS PROPIEDADES
    const {navigation, route} = props;
    const {place} = route.params;
    //VAMOS A MODIFICAR LA CABECERA DE MI STACK, COLOCANDOLO COMO TITULO PLACE
    useLayoutEffect(() => {
        navigation.setOptions({title: place.name});
    }, [navigation]);
  return (
    <View style={styles.container}>
      <ScrollView>
      <PagerView style={styles.PagerView} initialPage={0}>
        {map(place.images, (image, index) => (
          <View style={styles.page} key={index}>
            <Image source={{uri: image}} style={{width: "100%", height: "100%"}} resizeMode='cover'></Image>
          </View>
        ))}
      </PagerView>

      <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16, marginVertical: 8}}>

         <Text style={{ fontWeight: "bold" }}>{name}</Text>
                    <AirbnbRating 
                    count={5}
                    defaultRating={place.rating/place.count}
                    size={12}
                    showRating={false}
                    isDisabled={true} />
      </View>

      <Text style={{ color: "gray",  margin: 16 }}>{place.description}</Text> 
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  PagerView:{
    height: 256
  },
  page: {
    flex: 1,
    width: "100%",
    height: 256,
  }
})