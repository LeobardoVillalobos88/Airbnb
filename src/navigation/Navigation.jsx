import Reacty from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateAccount from '../modules/auth/screens/CreateAccount';
import {Icon} from '@rneui/themed';
import LearningComponent from '../modules/learning/screens/LearningComponent';
import LoginStack from './stack/LoginStack';
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  const { iconName, iconType } = getIconName(route.name, focused);
                  return (
                    <Icon name={iconName} type={iconType} size={size} color={color} />
                  );
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                headerShown: false
              })}
              >
                <Tab.Screen name="Home" component={LoginStack} options={{title: 'Inicio'}}/>
                <Tab.Screen name="Settings" component={CreateAccount} options={{title: 'Crear cuenta'}} />
                <Tab.Screen name="LearningComponent" component={LearningComponent} options={{title: 'Componentes'}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const getIconName = (routeName, focused) => {
    let iconName = "";
    const iconType = "material-community";
  
    switch (routeName) {
      case "Home":
        iconName = focused ? "home" : "home-outline";
        break;
      case "CreateAccount":
        iconName = focused ? "account" : "account-outline";
        break;
      case "LearningComponent":
      iconName = focused ? "alien" : "alien-outline";
      break;
    }
    return { iconName, iconType };
  };