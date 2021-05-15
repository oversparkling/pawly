import React, { useState } from 'react';
import WelcomeScreenfinal from './welcomeScreenfinal';
import ViewImageScreen from './ViewImageScreen';
import Screens from './HomeStackNavigator'
import LoginPage from './screens/loginPage';
import ProfilePage from './screens/profilePage';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './screens/tabs';
import Task from './screens/TaskPage';

export default function App() {
  return(
    <Screens/>
  );
}

