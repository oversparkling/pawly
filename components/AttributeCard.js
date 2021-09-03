import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

function AttributeCard(props) {
    const [suffix, setSuffix] = useState("");
    useEffect(() => {
        switch (props.type) {
            case "Weight":
                setSuffix("kg");
                break;
            case "Age":
                setSuffix("years");
                break;
            case "Gender":
                setSuffix("");
                break;
        }
    });
    return (
        <View style = { styles.container }>
            <Text style = { styles.fontMain }>{props.value} {suffix}</Text>
            <Text style = { styles.fontDescription }>{props.type}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {    
        width:              97,
        height:             97,
        alignItems:         "center",
        justifyContent:     "center",
        backgroundColor:    "white",
        borderColor:        "#E1AAAA",
        borderRadius:       15,
        borderWidth:        1,
    },

    fontMain: {
        fontFamily:     "Sofia-Pro-Regular",
        fontSize:       16,
        color:          "black",
    },

    fontDescription: {
        fontFamily:     "Sofia-Pro-Regular",
        fontSize:       12,
        color:          "grey",
        marginTop:      2,
    },
});

export default AttributeCard;
