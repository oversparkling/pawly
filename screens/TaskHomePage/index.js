import React from 'react';
import { ScrollView } from 'react-native';
import TaskCard from './components/TaskCard';

function TaskHomePage(props) {
    return (
        <ScrollView contentContainerStyle = {{ justifyContent:'center'}}>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </ScrollView>
    );
}

export default TaskHomePage;