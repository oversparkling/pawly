import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WelcomeScreenfinal from './welcomeScreenfinal';
import ViewImageScreen from './ViewImageScreen';


const screens = {
    Home: {
        screen: WelcomeScreenfinal
    },
    SecondScreen:{
        screen: ViewImageScreen
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);