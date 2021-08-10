import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export const PreviewLayout = ({values, selectedValue, setSelectedValue}) => (
    <View style = {styles.container} >
        {values.map((value) => (
            <TouchableOpacity key = {value} onPress={() => setSelectedValue(value)}
                style = {[
                    styles.button,
                    selectedValue === value && styles.selected,
                ]}
            >
                <Text style={[ styles.buttonLabel, selectedValue === value && styles.selectedLabel,]}>{value}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

const styles = StyleSheet.create({

    container: {
        flex:               1,
        flexDirection:      "row",
        flexWrap:           "wrap",
        width:              "100%",
        justifyContent:     "space-between",
        marginBottom:       20,
    },

    button: {
        borderRadius:       30,
        borderWidth:        1,
        borderColor:        "#E1AAAA",
        backgroundColor:    "white",
        width:              160,
        height:             45,
        alignItems:         "center",
        justifyContent:     "center",
    },

    selected: {
        backgroundColor:    "#E1AAAA",
        borderWidth:        0,
    },

    buttonLabel: {
        fontSize:           15,
        fontFamily:         "Sofia-Pro-Regular",
        color:              "black",
    },

    selectedLabel: {
        color:              "white",
    },
    
});

