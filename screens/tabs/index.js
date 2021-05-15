import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreenfinal from '../../welcomeScreenfinal';
import LoginPage from '../loginPage';
import { StyleSheet,View } from 'react-native';
import ProfilePage from '../profilePage';
import Petfolio from '../Petfolio';
import Task from '../TaskPage';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
        <Tab.Navigator >
        <Tab.Screen name="Profile" component={ProfilePage} />
        <Tab.Screen name = "Add Task" component = {Task} />
        <Tab.Screen name="Petfolio" component={Petfolio} />
        </Tab.Navigator>
  );
}


export default Tabs;