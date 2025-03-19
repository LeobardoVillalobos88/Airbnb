import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/utils/firebaseConnection";
import Loading from "../../../kernel/components/Loading";
import ListHouses from "../../../kernel/components/ListHouses";
export default function Home(props) {
  const { navigation } = props;
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "place"));
        const hauseArray = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          hauseArray.push(doc.data());
        });
        setHouses(hauseArray);
      } catch (error) {
        console.error("Error getting documents: ", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <Loading
        isVisible={loading}
        title="Cargando los inmuebles"
        color="#4abfa4"
        size="large"
      />
    );
  } else {
    return <View style={styles.container}>
        <FlatList
          data={houses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListHouses
              images={item.images}
              name={item.name}
              description={item.description}
              price={item.price}
              rating={item.rating}
              count={item.count}
              navigation={navigation}
            />
          )}
        />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
