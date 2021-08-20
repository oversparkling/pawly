import React, { useEffect, useState,useContext } from "react";
import { View, ScrollView, Text, StyleSheet,Button, TouchableHighlight } from "react-native";
import { AuthContext } from "../../provider/AuthProvider";
import tailwind from "tailwind-rn";
import TaskCard from "../../components/TaskCard";
import { deleteTaskByID, getTaskByUser } from "../../actions/TaskActions";
import firebase from "../../firebaseConfig"
import ListItemSwipeable from "react-native-elements/dist/list/ListItemSwipeable";
import { getPetProfilePicture } from "../../actions/PetActions";
import { SafeAreaView } from "react-native";
import moment from 'moment'
import { SwipeListView } from 'react-native-swipe-list-view';

function TaskHomeScreen(props) {

    // const { username} = useContext(AuthContext);
    const { setIsLoggedIn, isLoggedIn, username } = useContext(AuthContext);
    const [tasks, setTaskList] = useState([])
    const [todayTasks,setTodayTasks] = useState([])
    const [thisweekTasks, setThisWeekTasks] = useState([])

    useEffect(()=>{
    
        var beginningDateObject = moment().startOf('day').toDate();
        var endDateObject = moment().add(7, 'days').endOf('day').toDate()
        console.log(endDateObject)
        const unsubscribe = firebase.firestore().collection("UserTasks").where("userID", "==", username).where("TaskTime", ">=", beginningDateObject).where("TaskTime", "<", endDateObject).orderBy("TaskTime").onSnapshot(querySnapShot=>{
            let today = []
            let week = []
            querySnapShot.forEach((doc)=>{
                console.log(doc.data().TaskTime.toDate().toDateString())
                console.log(new Date().toDateString())
                if (doc.data().TaskTime.toDate().toDateString() == new Date().toDateString()){
                    let temp = doc.data()
                    temp.id = doc.id
                    today.push(temp)
                }
                else{
                    let temp = doc.data()
                    temp.id = doc.id
                    week.push(temp)
                }
            })
            setTodayTasks(today)
            setThisWeekTasks(week)
        })
        return () => {
            unsubscribe()
        };
    },[])
    return (
            <ScrollView showsVerticalScrollIndicator = { false } style = {styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                {/* Headers */}
                <Text style = { styles.headerOneText }>Upcoming</Text>
                {todayTasks.length != 0 && 
                    <View>
                        <Text style = { styles.headerTwoText }>Today</Text>
                        <View style = { tailwind("items-center mt-5") }>
                        {/* {todayTasks.map((item,index) =>{
                            console.log(item)
                            return(<TaskCard taskName = { item.description }  cardImageUrl = { item.cardImageUrl } time = { item.TaskTime.toDate() }key = {index} image = {item.profilePics} isToday = {true}/>)})} */}
                        
                        <SwipeListView
                            data={todayTasks}
                            renderItem={ (data, rowMap) => (
                            <TaskCard taskName = { data.item.description }  cardImageUrl = { data.item.cardImageUrl } time = {data.item.TaskTime.toDate()}key = {rowMap} image = {data.item.profilePics} isToday = {true}/>
                            )}
                            renderHiddenItem={ (data, rowMap) => (
                                <View style={styles.rowBack}>
                                    <TouchableHighlight style = {{height:200,width:163,justifyContent:'center',backgroundColor:'blue',borderRadius:15,}}>
                                        <Text>Completed</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight style = {{height:200,width:163,justifyContent:'center',backgroundColor:'red',borderRadius:15,alignItems:'flex-end'}} onPress = {()=>deleteTaskByID(data.item.id)}>
                                        <Text>Delete</Text>
                                    </TouchableHighlight>
                                </View>
                            )}
                            leftOpenValue={75}
                            rightOpenValue={-75}
        
                        />
                    </View>
                    </View>
                }
                {/* <Button title = "log out" onPress = {()=> logout()}/> */}
                
                {thisweekTasks.length != 0 && 
                    <View>
                    <Text style = { styles.headerTwoText }>This Week</Text>
                    <View style = { tailwind("items-center mt-5") }>
                    {/* {todayTasks.map((item,index) =>{
                        console.log(item)
                        return(<TaskCard taskName = { item.description }  cardImageUrl = { item.cardImageUrl } time = { item.TaskTime.toDate() }key = {index} image = {item.profilePics} isToday = {true}/>)})} */}
                    
                    <SwipeListView
                        data={thisweekTasks}
                        renderItem={ (data, rowMap) => (
                        <TaskCard taskName = { data.item.description }  cardImageUrl = { data.item.cardImageUrl } time = {data.item.TaskTime.toDate()}key = {rowMap} image = {data.item.profilePics} isToday = {true}/>
                        )}
                        renderHiddenItem={ (data, rowMap) => (
                            <View style={styles.rowBack}>
                                <TouchableHighlight style = {{height:200,width:163,justifyContent:'center',backgroundColor:'blue',borderRadius:15,}}>
                                    <Text>Completed</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style = {{height:200,width:163,justifyContent:'center',backgroundColor:'red',borderRadius:15,alignItems:'flex-end'}} onPress = {()=>deleteTaskByID(data.item.id)}>
                                    <Text>Delete</Text>
                                </TouchableHighlight>
                            </View>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-75}
    
                    />
                </View>
                </View>
                    
                }
                
            </ScrollView>
            
    );
}

const styles = StyleSheet.create({

    container: {
        width:              "100%",
        backgroundColor:    "white",
        paddingLeft:        30,
        paddingRight:       30,
        flex: 1
    },

    headerOneText: {
        fontSize:           36,
        fontFamily:         "Recoleta-Regular",
        marginTop:          60,
        alignSelf:          'flex-start',
        
    },

    headerTwoText: {
        fontSize:           15,
        fontFamily:         "Sofia-Pro-Regular",
        textTransform:      'uppercase',
        paddingTop:         10,
    },
    rowBack:{
        flexDirection:      'row',
        width:              326,
        height:             200,
        marginBottom:       23,
        marginTop:          15,
        justifyContent:     'space-between',
        alignItems:         'center'
    }
});

export default TaskHomeScreen;
