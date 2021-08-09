import MainPetsScreen from "./MainPetsScreen";
import React from "react";
import PetProfileScreen from "./PetProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ImagePickerExample from "./ImagePickerEx";
import AddPetScreen from "./AddPetScreen";

const Petfolio = createStackNavigator();

const PetfolioStack = () => {
    return (
        <Petfolio.Navigator screenOptions={{ headerShown: false }}>
            <Petfolio.Screen name="MainPetPage" component={MainPetsScreen} />
            <Petfolio.Screen name="PetProfileScreen" component={PetProfileScreen} />
            <Petfolio.Screen name="AddPhotos" component={ImagePickerExample} />
            <Petfolio.Screen name="AddPets" component={AddPetScreen} />
        </Petfolio.Navigator>
    );
};

export default PetfolioStack;
 