import React from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import TaskCard from "../../components/TaskCard";

function TaskHomeScreen(props) {
    return (
        <View style = {{backgroundColor:'white'}}>
            <ScrollView contentContainerStyle={[tailwind("mt-20 p-4")]}>
                <Text style={styles.header}>Upcoming</Text>
                <View>
                    <Text style={styles.dayHeader}>Today</Text>
                    <View style={tailwind("items-center mt-10")}>
                        <TaskCard time="3hrs" />
                        <TaskCard />
                        <TaskCard />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        fontFamily: "Recoleta-Regular",
    },
    dayHeader: {
        fontSize: 15,
        fontFamily: "Recoleta-Regular",
    },
});

export default TaskHomeScreen;
