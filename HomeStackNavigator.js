import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import WelcomeScreenfinal from './welcomeScreenfinal';
import ViewImageScreen from './ViewImageScreen';
import { NavigationContainer} from '@react-navigation/native';
import LoginPage from './screens/loginPage';
import RegisterPage from './screens/registerPage';
import Tabs from './screens/tabs';



const Stack = createStackNavigator();
const Screens = (props) =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions ={{headerShown: false,
            }}
        >
            <Stack.Screen name = {'Home'} component = {WelcomeScreenfinal} />
            <Stack.Screen name = {'NextPage'} component =  {ViewImageScreen} />
            <Stack.Screen name = {'LoginPage'} component = {LoginPage} />
            <Stack.Screen name = {'RegisterPage'} component = {RegisterPage} />
            <Stack.Screen name = {'TabsHomePage'} component = {Tabs} />

        </Stack.Navigator>
        </NavigationContainer>
    )
}



export default Screens;