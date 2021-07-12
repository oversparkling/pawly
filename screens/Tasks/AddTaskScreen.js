import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, StatusBar } from "react-native";
import TaskTypeCard from "./TaskTypeCard";

// function AddTaskScreen(props){
//   const [task, setTask] = useState([
//     { name: 'Brush',  key: '1' },
//     { name: 'Clean',  key: '2' },
//     { name: 'Feed',   key: '3' },
//     { name: 'Groom',  key: '4' },
//     { name: 'Play',   key: '5' },
//     { name: 'Shower', key: '6' },
//     { name: 'Walk',   key: '7' },
//     { name: 'Train',  key: '8' }
//   ]);

//   return (
//     <View styles = {styles.container }>
//       <ScrollView>
//         { task.map( (item) => {
//             return (
//               <View key = {item.key} >
//                 <Text style = {styles.item}>{item.name}</Text>
//               </View>
//             )
//         })}
//       </ScrollView>
//     </View>
//   );
// }


function AddTaskScreen(props) {
  const [task, setTask] = useState([
        { name: 'Brush',  key: '1' },
        { name: 'Clean',  key: '2' },
        { name: 'Feed',   key: '3' },
        { name: 'Groom',  key: '4' },
        { name: 'Play',   key: '5' },
        { name: 'Shower', key: '6' },
        { name: 'Walk',   key: '7' },
        { name: 'Train',  key: '8' }
      ]);

  return (
    <View style = { styles.mainContainer } >
      <ScrollView>
      <Text style = { styles.header }> Add Task </Text> 
      <View style = { styles.taskContainer }>
        <TaskTypeCard /> 
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
        <TaskTypeCard />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    top: 50,
    padding: 30,
    width: "100%",
    backgroundColor: 'white',
    // paddingTop: StatusBar.currentHeight,
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
  },

  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },

});

export default AddTaskScreen;