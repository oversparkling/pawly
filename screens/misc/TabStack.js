import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import HomeStack from "../Home/HomeStack";
import PetfolioStack from "../Petfolio/PetfolioStack";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomTabButton from "./components/CustomTabButton";
import AddTaskScreen from "../Tasks/AddTaskScreen";
import TaskStack from "../Tasks/TaskStack";

function TabStack(props) {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>

            <Tab.Screen
                name = "Home"
                component = { HomeStack }
                options = {{
                    tabBarIcon: ({ focused, size }) => (
                        <Ionicons
                            name = {focused ? "home" : "home-outline"}
                            color = {focused ? "#2B2B2B" : "#AEAEB2"}
                            size = {size}
                        />
                    ),
                }}
            />
            {/* AddTask */}
            <Tab.Screen 
                name = "AddTask" 
                component = { TaskStack } 
                options = {{ tabBarIcon:({ focused })=>(<CustomTabButton/>)}}
            />
            {/* Petfolio */}
            <Tab.Screen
                name = "Petfolio"
                component = { PetfolioStack } 
                options = {{
                    tabBarIcon: ({ focused, size }) => (
                        <Ionicons
                            name = { focused ? "person" : "person-outline" }
                            color = { focused ? "#2B2B2B" : "#AEAEB2" }
                            size = { size} 
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export default TabStack;
