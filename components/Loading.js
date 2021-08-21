import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import BouncingPreloader from "react-native-bouncing-preloaders";

const icons = [
    require("../assets/catLoading.png"),
    require("../assets/dogLoading.png"),
]

function Loading() {
    return (
        <Fragment>
            <View style={styles.container}>
                <BouncingPreloader
                    icons={icons}
                    leftDistance={-50}
                    rightDistance={-170}
                    speed={1100}
                />
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 350
    },
    text: {
        color: '#bfbfcf',
    },
});

export default Loading;