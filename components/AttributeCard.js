import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

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
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.fontMain}>5 years</Text>
            <Text style={styles.fontDescription}>Age</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 97,
        height: 97,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "pink",
        borderRadius: 15,
        borderWidth: 1,
    },
    fontMain: {
        fontFamily: "Sofia-Pro-Regular",
        fontSize: 15,
        color: "pink",
    },
    fontDescription: {
        fontFamily: "Sofia-Pro-Regular",
        fontSize: 9,
        color: "grey",
        marginTop: 2,
    },
});

export default AttributeCard;
