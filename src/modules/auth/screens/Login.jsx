import React, {useState} from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { Image , Input, Button} from '@rneui/base';
import { isEmpty } from 'lodash';
import { Icon } from '@rneui/base';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function Login(props) {
    console.log(props)
    const{navigation} = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState({email: '', password: ''});
    const [showPassword, setShowPassword] = useState(true);
    const handleLogin = () => {
        if(isEmpty(email) || isEmpty(password)) {
            setError({
                email: 'El correo es requerido',
                password: 'La contraseña es requerida'
            })
        } else {
            setError({
                email: "",
                password: ""
            });
            const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Iniciando: ",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
        }
    };
    return (
        <View style={styles.container}>
            <Image
            source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}  
            style={{width: 100, height: 100}}
            />

            <View style={{marginVertical: 16}}>
                <Input 
                placeholder="Correo Electronico"
                label="Correo Electronico"
                keyboardType="email-address"
                inputContainerStyle={{width: '100%'}}
                onChange={({nativeEvent: {text}}) => setEmail(text)}
                errorMessage={errors.email}
                />
                <Input 
                placeholder="Contraseña"
                label="Contraseña"
                inputContainerStyle={{width: '100%'}}
                secureTextEntry={showPassword}
                onChange={({nativeEvent: {text}}) => setPassword(text)}
                errorMessage={errors.password}
                rightIcon={
                    <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    type='material-community'
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    />
                }
                />
                <Button
                title={"Iniciar sesión"}
                onPress={handleLogin}
                />
                <Button type='clear' title="Crear cuenta" 
                onPress={() => navigation.navigate('CreateAccountStack')}/>
            </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})