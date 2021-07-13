import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import TaskCard from "../../components/TaskCard";

function TaskHomeScreen(props) {
    return (
        <View style = { styles.container }>
            <ScrollView showsVerticalScrollIndicator = { false }>
                <Text style = {styles.headerText}> Upcoming </Text>
                <Text style={styles.headerDay}> Today </Text>
                    <View style = {tailwind("items-center mt-10")}>
                        <TaskCard time = "3hrs" />
                        <TaskCard />
                        <TaskCard />
                    </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width:              "100%",
        backgroundColor:    "white",
        paddingLeft:        30,
        paddingRight:       30,
        paddingTop:         60,
    },

    headerText: {
        fontSize: 40,
        fontFamily: "Recoleta-Regular",
    },

    headerDay: {
        fontSize: 23,
        fontFamily: "Recoleta-Regular",
    },
});

export default TaskHomeScreen;
