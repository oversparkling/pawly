
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddTaskScreen from "./AddTaskScreen";
import EditTaskScreen from "./EditTaskScreen";
import ImagePickerExample from "../Petfolio/ImagePickerEx";

const Task = createStackNavigator();

const TaskStack = () => {
    return (
        <Task.Navigator screenOptions={{ headerShown: false }}>
            <Task.Screen name="AddTask" component={AddTaskScreen} />
            <Task.Screen name="EditTask" component={EditTaskScreen} />
        </Task.Navigator>
    );
};

export default TaskStack;
 