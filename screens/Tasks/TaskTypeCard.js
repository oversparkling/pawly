import React from "react";
import { View } from "react-native";
import { Text, StyleSheet, TouchableHighlight, Image } from "react-native";

function TaskTypeCard(props) {
    
    return (
        <TouchableHighlight style = { styles.container } onPress = { props.onPress } >
            {/* <Image 
                source = {require('./bowl.png')}
                style = {{ width: 29, height: 29 }} /> */}
            <Text style = { styles.text }> { props.text } </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({

    container: {
        width:              186,
        height:             70,
        flexDirection:      "row",
        backgroundColor:    "white",
        alignItems:         "center",
        justifyContent:     "center",
        borderColor:        "black",
        borderRadius:       20,
        borderWidth:        1,
        marginBottom:       30,
    },

    text: {
        fontSize:           18,
        fontFamily:         "Sofia-Pro-Regular",
        color:              "black",
    },

    containerPressed: {
        width:              "70%",
        height:             80,
        borderRadius:       15,
        flexDirection:      "column",
        backgroundColor:    "pink",
        alignItems:         "center",
        justifyContent:     "center",
        borderColor:        "#E1AAAA",
        borderRadius:       20,
        borderWidth:        1,
        marginBottom:       25,
    },
    
});

export default TaskTypeCard;
