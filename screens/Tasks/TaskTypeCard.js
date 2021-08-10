import React from "react";
import { View } from "react-native";
import { Text, StyleSheet, TouchableHighlight, Image } from "react-native";

function TaskTypeCard(props) {
    
    return (
       
        <TouchableHighlight style = { styles.container } underlayColor = {'#E1AAAA'} onPress = { props.onPress } >
            {/* <Image 
                source = {require('./bowl.png')}
                style = {{ width: 29, height: 29 }} /> */}
            <Text style = { styles.text }> { props.text } </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({

    container: {
        width:              100,
        height:             100,
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
        fontSize:           15,
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
