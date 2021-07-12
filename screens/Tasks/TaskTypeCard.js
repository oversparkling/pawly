import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

function TaskTypeCard(props) {
    return (
        <TouchableHighlight style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 186,
        height: 69,
        borderRadius: 15,
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#E1AAAA",
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 20,
    },

    text: {
        fontSize: 18,
        fontFamily: "Sofia-Pro-Regular",
        color: "#E1AAAA",
    },
});

export default TaskTypeCard;
