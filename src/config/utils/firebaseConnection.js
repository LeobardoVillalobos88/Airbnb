import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDJiDhNrlMOS2fuZMiFF5NtVq2UD_IMRXI",
    authDomain: "airbnb-9f70f.firebaseapp.com",
    projectId: "airbnb-9f70f",
    storageBucket: "airbnb-9f70f.firebasestorage.app",
    messagingSenderId: "404942590460",
    appId: "1:404942590460:web:1e136d5d84fc2a76d52279"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };