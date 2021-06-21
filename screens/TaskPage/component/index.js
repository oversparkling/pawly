import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function TaskButton(props) {
    return (
        <View style = {styles.individualItems}>
            <Text style = {{fontSize:18}}> {props.data.taskName}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    individualItems:{
        height:69,
        width:186,
        borderRadius:20,
        borderWidth:1,
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:45,
    }
})

export default TaskButton;