import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Divider } from "react-native-elements";

function AddPetScreen(props) {

    return (
        <View style = { styles.mainContainer }>
            <ScrollView showsVerticalScrollIndicator = { false }> 
                <View style = { styles.header }>
                  <TouchableOpacity>
                    <Icon
                        name = "arrow-back-outline"
                        type = "ionicon"
                        color = "#000"
                    />
                  </TouchableOpacity>
                <Text style = { styles.headerText }> Add Pet </Text>
                </View>
                <View style = {styles.infoContainer}>
                    <Text style = { styles.headingText }> Pet Name </Text>  
                    <TextInput placeholder = "Pet Name" style = { styles.input } />

                    <Text style = { styles.headingText }> Gender </Text>  
                    <TextInput placeholder = "Gender" style = { styles.input } />

                    <Text style = { styles.headingText }> Birthday </Text>  
                    <TextInput placeholder = "Birthday" style = { styles.input } />

                    <Text style = { styles.headingText }> Weight </Text>  
                    <TextInput placeholder = "Weight" style = { styles.input } />

                    <Text style = { styles.headingText }> Microchip number </Text>  
                    <TextInput placeholder = "Microchip number" style = { styles.input } />
                    
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
      width:              "100%",
      backgroundColor:    "white",
      paddingLeft:        30,
      paddingRight:       30,
      paddingTop:         60,
    },

    infoContainer: {
        flexDirection:    "column",
        // alignItems:     "center",
        width:            "100%",
        justifyContent:   "space-between",
    },

    header: {
      width:              '100%',
      alignItems:         'center',
      flexDirection:      'row',
    },

    headerText: {
      fontSize:           40,
      fontFamily:         "Recoleta-Regular",
      paddingLeft:        60,
    },

    headingText: {
        fontSize:           20,
        fontFamily:         "Recoleta-Regular",
        paddingBottom:      5,
        paddingTop:         20,
    },

    inputText: {
        fontFamily:         "Recoleta-Regular",
        color:              "grey",
        paddingLeft:        5,
    },

    input: {    
        borderColor:        "#E1AAAA",
        borderRadius:       15,
        borderWidth:        2,
        width:              "80%",
        fontSize:           20,
        paddingVertical:    10,
        fontFamily:         "Recoleta-Regular",
        color:              "grey",
        paddingLeft:        10,
    },

    scrollView: {
      backgroundColor:  "white",
      marginHorizontal:  20,
    },
});

export default AddPetScreen;
