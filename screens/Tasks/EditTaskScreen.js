import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import TaskTypeCard from "./TaskTypeCard";
import { useNavigation } from "@react-navigation/native";

function EditTaskScreen(props) {
    const [task, setTask] = useState([
        { name: "Brush", key: "1" },
        { name: "Clean", key: "2" },
        { name: "Feed", key: "3" },
        { name: "Groom", key: "4" },
        { name: "Play", key: "5" },
        { name: "Shower", key: "6" },
        { name: "Walk", key: "7" },
        { name: "Train", key: "8" },
    ]);

    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{ marginTop: 50 }}>
                <Text style={styles.header}> Add Task </Text>
                <View style={styles.taskContainer}>
                    {task.map((item) => {
                        return (
                            <TaskTypeCard
                                text={item.name}
                                key={item.key}
                                onPress={() => navigation.navigate("EditTask")}
                            />
                        );
                    })}
                    {/* <TaskTypeCard text = {task.name} /> 
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard /> */}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 30,
        width: "100%",
        backgroundColor: "white",
        // paddingTop: StatusBar.currentHeight,
    },

    taskContainer: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
    },

    header: {
        fontSize: 35,
        fontFamily: "Recoleta-Regular",
        marginBottom: 30,
    },

    scrollView: {
        backgroundColor: "white",
        marginHorizontal: 20,
    },
});

export default EditTaskScreen;
