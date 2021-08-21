import React, { useState,useEffect } from "react";
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Divider } from "react-native-elements";
import TaskTypeCard from "./TaskTypeCard";
import { getTaskPage } from "../../actions/TaskActions";

function AddTaskScreen(props) {
  
  const [task, setTask] = useState([]);
  useEffect(() => { getTaskPage().then(response => setTask(response)) },[])

  const navigation = useNavigation();

  return (
    <View style = { styles.mainContainer }>
      <ScrollView showsVerticalScrollIndicator = { false }> 
        {/* Header */}
        <View style = { styles.header }>
          <Text style = { styles.headerText }>Add Task</Text>
        </View>

        {/* Body */}
        <View style = {styles.taskContainer}>
          { task.map((item, index) => {
            return (
              <TaskTypeCard
                text = { item.id }
                image = {item.iconUrl}
                key = { index }
                onPress={() => navigation.navigate("EditTask",{
                  type: item.id,
                  name: item.data().description
              })}/>
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
        flexDirection:  "row",
        flexWrap:       "wrap",
        alignItems:     "center",
        width:          "100%",
        justifyContent: "space-between",
    },

    header: {
      width:            '100%',
      alignItems:       'center',
      flexDirection:    'row',
      marginBottom:     25,
      paddingTop:       10,
      justifyContent:   'center',
    },

    headerText: {
      fontSize:         40,
      fontFamily:       "Recoleta-Regular",
    },

    scrollView: {
      backgroundColor:  "white",
      marginHorizontal:  20,
    },
});

export default AddTaskScreen;
