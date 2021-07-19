import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import TaskCard from "./components/TaskCard";
import * as Font from "expo-font";
import TaskHomeScreen from "./screens/Home/TaskHomeScreen";
import PetProfileScreen from "./screens/Petfolio/PetProfileScreen";
import AttributeCard from "./components/AttributeCard";
import MainPetsScreen from "./screens/Petfolio/MainPetsScreen";
import PetfolioStack from "./screens/Petfolio/PetfolioStack";
import { NavigationContainer } from "@react-navigation/native";
import TabStack from "./screens/misc/TabStack";
import CustomTabButton from "./screens/misc/components/CustomTabButton";
import AddTaskScreen from "./screens/Tasks/AddTaskScreen";
import AddPetScreen from "./screens/Petfolio/AddPetScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import AuthContextProvider from './provider/AuthProvider';
import RootStack from "./screens/RootStack";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            "Recoleta-Regular": require("./assets/fonts/Recoleta-Regular.ttf"),
            "Recoleta-Bold": require("./assets/fonts/Recoleta-Bold.ttf"),
            "Sofia-Pro-Regular": require("./assets/fonts/Sofia-Pro-Regular.ttf"),
        });
        setIsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);
    // const saveUserToDB = async(user) =>{
    //   await API.graphql(graphqlOperation(createUser,{input: user}))
    // }

    // useEffect(() =>{
    //   const updateUser = async()=>{
    //     const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true})
    //     if (userInfo){
    //       console.log(userInfo.attributes.sub)
    //       const userData = await API.graphql(graphqlOperation(getUser,{id:userInfo.attributes.sub}))
    //       if (!userData.getUser){
    //         const user = {
    //           id: userInfo.attributes.sub,
    //           username: userInfo.username,
    //           name: userInfo.username,
    //           image: 'dummy'
    //         }
    //         console.log(user)
    //         saveUserToDB(user);
    //       } else{
    //         console.log("user alr exists");
    //       }
    //     }

    //   }
    //   updateUser();
    // }
    // ,[])

    return isLoaded ? (
        <AuthContextProvider>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </AuthContextProvider>
        // <RegisterScreen />
    ) : (
       

        <View>
            <Text>Still Loading</Text>
        </View>
    );

    // <Tweet/>
}

// export default withAuthenticator(App)
export default App;
