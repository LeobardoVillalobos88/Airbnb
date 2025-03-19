import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import {app ,auth ,db , storage} from './src/config/utils/firebaseConnection';
import "./gesture-handler";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { set } from 'lodash';
import Loading from './src/kernel/components/Loading';
import NavigationLogger from './src/navigation/NavigationLogger';
//VAMOS A IMPORTAR LOGBOX
import { LogBox } from 'react-native';
//VAMOS A IGNORAR LOS WARNING
LogBox.ignoreAllLogs(true);
export default function App() {
  const [login, setLogin] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuario: ",user);
    setLogin(true);
  } else {
    setLogin(false);
  }
  setLoader(false);
    });
  },[]);
  if(loader){
    return(
        <Loading isVisible={true} size={64} color='#4abfa4' title='Espere un momento'/>
    );
  }else{
    if(login){
      return (<NavigationLogger/>); 
    }else{
      return (<Navigation/>);
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});