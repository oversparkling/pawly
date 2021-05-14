import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreenfinal from '../../welcomeScreenfinal';
import LoginPage from '../loginPage';
import { StyleSheet,View } from 'react-native';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
        <Tab.Navigator >
        <Tab.Screen name="Home" component={WelcomeScreenfinal} />
        <Tab.Screen name="Settings" component={LoginPage} />
        </Tab.Navigator>
    
  );
}


export default Tabs;