import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon, Divider } from "react-native-elements";

function CustomTabButton(props) {
    return (
        <View style = { styles.container }>
            <Icon name = "plus" type = "antdesign" color = "white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:             40,
        width:              70,
        backgroundColor:    "#E1AAAA",
        borderRadius:       35,
        alignItems:         "center",
        justifyContent:     "center",
    },
});

export default CustomTabButton;
