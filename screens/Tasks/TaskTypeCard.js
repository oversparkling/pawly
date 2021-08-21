import React, { useEffect } from "react";
import { View } from "react-native";
import { Text, StyleSheet, TouchableHighlight, Image } from "react-native";

function TaskTypeCard(props) {
    useEffect(()=>{
        console.log(props)
    },[])
    return (
       
        <TouchableHighlight style = { styles.container } underlayColor = {'#E1AAAA'} onPress = { props.onPress } >
            <View style = {{alignItems:'center'}} >
                <Image 
                    source = {{uri: props.image}}
                    style = {{ width: 29, height: 29,resizeMode:'contain'}} />
                <Text style = { styles.text }> { props.text } </Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({

    container: {
        width:              100,
        height:             100,
        backgroundColor:    "white",
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
