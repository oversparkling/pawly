
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TaskHomeScreen from "./TaskHomeScreen";

const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Screen name="TaskHomeScreen" component={TaskHomeScreen} />
        </Home.Navigator>
    );
};

export default HomeStack;
