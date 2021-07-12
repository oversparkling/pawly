import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

function TaskTypeCard(props) {
    return (
        <TouchableHighlight style = { styles.container } onPress = { props.onPress } >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        width:              "70%",
        height:             80,
        borderRadius:       15,
        flexDirection:      "column",
        backgroundColor:    "white",
        alignItems:         "center",
        justifyContent:     "center",
        borderColor:        "#E1AAAA",
        borderRadius:       20,
        borderWidth:        1,
        marginBottom:       25,
    },

    text: {
        fontSize: 22,
        fontFamily: "Sofia-Pro-Regular",
        color: "#E1AAAA",
    },

    containerPressed: {
        width:              "70%",
        height:             80,
        borderRadius:       15,
        flexDirection:      "column",
        backgroundColor:    "white",
        alignItems:         "center",
        justifyContent:     "center",
        borderColor:        "#E1AAAA",
        borderRadius:       20,
        borderWidth:        1,
        marginBottom:       25,
    },
    
});

export default TaskTypeCard;
