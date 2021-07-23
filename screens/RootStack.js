import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabStack from "./misc/TabStack";
import AuthStack from "./Auth/AuthStack";
import { AuthContext } from "../provider/AuthProvider";


const Root = createStackNavigator();

function RootStack(props) {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <Root.Screen name = "Tab" component = { TabStack } />
            ) : (
                <Root.Screen name = "Auth" component = { AuthStack } />
            )}
        </Root.Navigator>
    );
}

export default RootStack;
