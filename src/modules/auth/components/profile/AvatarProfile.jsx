import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import{ Icon, Avatar, Button } from '@rneui/base';
import { getAuth } from "firebase/auth";

export default function AvatarProfile() {

    const auth = getAuth();
    const [user, setUser]= useState(auth.currentUser);
    return (
        <View style={{ flexDirection: "row", marginLeft: 16, marginBotton: 16 }}>
            <Avatar
                rounded
                size="large"
                source={{
                    uri:
                        user.photoURL !== null
                            ? user.photoURL
                            : "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                }}
            />
            <View style={{ marginLeft: 8, justifyContent: "center", alignItems: "flex-start" }}>
                <Text style={{ fontWeight: "bold" }}>{user.displayName ? user.displayName : "Sin nombre"}</Text>
                <Text>{user.email ? user.email : "Anonimo"}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 64
    }});
