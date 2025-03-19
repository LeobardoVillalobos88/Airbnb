import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import{ Icon, Avatar, Button } from '@rneui/base';
import { getAuth } from "firebase/auth";
import ProfileOptions from '../components/profile/ProfileOptions';
import AvatarProfile from '../components/profile/AvatarProfile';

export default function Profile() {
    const auth = getAuth();
    const [user, setUser]= useState(auth.currentUser);

  return (
    <View style={styles.container}>
            <AvatarProfile />
            <ProfileOptions />
            <Button 
                title={"Cerrar Sesión"}
                containerStyle={styles.btnLogoutContainer}
                buttonStyle={styles.btnLogout}
                titleStyle={{color: "#4abfa4"}}
                onPress={() => {
                    auth.signOut();
                }}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 64
    },
    btnLogoutContainer: {
        margin: 16,
    },
     btnLogout: {
        backgroundColor: "white",
        borderColor: "#4abfa4",
        borderWidth: 1
     }
})