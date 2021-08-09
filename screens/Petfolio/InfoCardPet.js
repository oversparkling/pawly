import React from "react";
import { TextInput } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

function InfoCardPet(props) {
    return (
        <View style = { styles.container }>  
            <Text style = { styles.titleText }> { props.title } </Text>
            {/* <View style = { styles.input }>  */}
            <TextInput style = { styles.input } onChangeText = {(text)=>props.stateChange(text)}/> 
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width:              350,
        height:             50,
        borderRadius:       30,
        flexDirection:      "row",
        backgroundColor:    "white",
        borderColor:        "#E1AAAA",
        borderWidth:        1,
        alignItems:         "center",
        justifyContent:     "space-between",
        marginBottom:       20,
    },

    titleText: {
        fontSize:           18,
        fontFamily:         "Sofia-Pro-Regular",
        color:              "black",
        justifyContent:     "flex-start",
        paddingLeft:        13,
    },

    inputText: {
        fontSize:           18,
        fontFamily:         "Sofia-Pro-Regular",
        color:              "white",
    },

    input: {
        width:              180,
        height:             50,
        borderRadius:       30,
        backgroundColor:    "#E1AAAA",
        borderColor:        "#E1AAAA",
        alignItems:         "center",
        justifyContent:     "center",
        borderWidth:        1,
        textAlign:          'center',
        fontSize:           18,
        fontFamily:         "Sofia-Pro-Regular",
        color:              "white",
    },
    
});

export default InfoCardPet;