import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TaskTypeCard from "./TaskTypeCard";

function AddTaskScreen(props) {
  return (
    <View style = { styles.mainContainer }>
      <Text style = { styles.header }> Add Task </Text> 
      <View style = { styles.taskContainer }>
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    top: 50,
    width: "100%",
    backgroundColor: 'white',
    padding: 30,
    width:'100%',
  },
  
  taskContainer: {
    flexDirection: "column",
    alignItems: "center",
    width:'100%',
    justifyContent:'space-between'
  },

  header: {
    fontSize: 35,
    fontFamily: "Recoleta-Regular",
    marginBottom: 30,
  }
});

export default AddTaskScreen;