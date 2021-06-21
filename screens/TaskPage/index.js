import React from 'react';
import { StyleSheet, View, Text, _View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import BackButton from '../commonComponents/BackButton';
import { MaterialIcons } from '@expo/vector-icons';
import { listTaskss } from '../../src/graphql/queries';
import TaskButton from './component';
import { useState, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';

function Task(props) {
    const [datas,setDatas] = useState([]);
    useEffect ( ()=>{
        const fetchUser = async ()=>{
            const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
            if (userInfo){
                const taskData = await API.graphql(graphqlOperation(listTaskss))
                if (taskData){
                    setDatas(taskData.data.listTaskss.items)
                }
            }
        }
        fetchUser();
    })
    const getTasks=( ()=>{
        return datas.map(data => {
            return (
                <TaskButton data = {data} key = {data.id} >
                </TaskButton>
                )

        })
    })




    return(
        <SafeAreaView>
            <ScrollView>
                <View style = {styles.backButtonContainer}>
                    <BackButton/>
                </View>
                <View style = {styles.headerContainer}>
                    <Text style = {{fontSize: 36}}> Tasks</Text>
                </View>
                <View style = {styles.container}>
                    {/* <View style = {styles.individualItems}>
                        <MaterialIcons name="cleaning-services" size={24} color="black" />
                        <Text style = {{fontSize:18}}>Brush</Text>

                    </View> */}
                    {getTasks()}

                </View>


            </ScrollView>
        </SafeAreaView>
        
    
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
    },
    headerContainer:{
        height:40,
        width:'100%',
        paddingLeft:40
    },
    backButtonContainer:{
        marginTop:30,
        height:50,
        width:'100%',
    },
    individualItems:{
        height:69,
        width:186,
        borderRadius:20,
        borderWidth:1,
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:45,
    }
})

export default Task;