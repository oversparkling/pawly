import React from "react";
import { View } from "react-native";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

function InfoCard(props) {
    return (
        <View style = { styles.container }>  
            <Text style = { styles.titleText }> { props.title } </Text>
            <View style = { styles.input }> 
                <Text style = { styles.inputText }> { props.input } </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width:              300,
        height:             40,
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
        fontSize:           15,
        fontFamily:         "Sofia-Pro-Regular",
        color:              "black",
        justifyContent:     "flex-start",
        paddingLeft:        20,
    },

    inputText: {
        fontSize:           15,
        fontFamily:         "Sofia-Pro-Regular",
        color:              "white",
    },

    input: {
        width:              160,
        height:             40,
        borderRadius:       30,
        backgroundColor:    "#E1AAAA",
        borderColor:        "#E1AAAA",
        alignItems:         "center",
        justifyContent:     "center",
        borderWidth:        1,
    },
    
});

export default InfoCard;