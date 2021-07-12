import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Divider } from "react-native-elements";
import TaskTypeCard from "./TaskTypeCard";

function AddTaskScreen(props) {
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
        <View style = { styles.mainContainer }>
            <ScrollView showsVerticalScrollIndicator = { false }> 
                <View style = { styles.header }>
                  <TouchableOpacity>
                    <Icon
                        name = "arrow-back-outline"
                        type = "ionicon"
                        color = "#000"
                    />
                  </TouchableOpacity>
                <Text style = { styles.headerText }> Add Task </Text>
                </View>
                <View style = {styles.taskContainer}>
                    {task.map((item) => {
                        return (
                            <TaskTypeCard
                                text={item.name}
                                key={item.key}
                                onPress={() => navigation.navigate("EditTask")}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
      width:              "100%",
      backgroundColor:    "white",
      paddingLeft:        30,
      paddingRight:       30,
      paddingTop:         60,
    },

    taskContainer: {
        flexDirection:  "column",
        alignItems:     "center",
        width:          "100%",
        justifyContent: "space-between",
    },

    header: {
      width:            '100%',
      alignItems:       'center',
      flexDirection:    'row',
      marginBottom:     25,
    },

    headerText: {
      fontSize:         40,
      fontFamily:       "Recoleta-Regular",
      paddingLeft:      60,
    },

    scrollView: {
      backgroundColor:  "white",
      marginHorizontal:  20,
    },
});

export default AddTaskScreen;
