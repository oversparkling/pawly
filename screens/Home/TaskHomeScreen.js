import React, { useEffect, useState,useContext } from "react";
import { View, ScrollView, Text, StyleSheet,Button } from "react-native";
import { AuthContext } from "../../provider/AuthProvider";
import tailwind from "tailwind-rn";
import TaskCard from "../../components/TaskCard";
import { deleteTaskByID, getTaskByUser } from "../../actions/TaskActions";
import firebase from "../../firebaseConfig"
import ListItemSwipeable from "react-native-elements/dist/list/ListItemSwipeable";
import { getPetProfilePicture } from "../../actions/PetActions";
import { SafeAreaView } from "react-native";
import moment from 'moment'

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
                    today.push(doc.data())
                }
                else{
                    week.push(doc.data())
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
                        {todayTasks.map((item,index) =>{
                            return(<TaskCard taskName = { item.description }  cardImageUrl = { item.cardImageUrl } time = { item.TaskTime.toDate() }key = {index} image = {item.profilePics} isToday = {true}/>)})}
                        </View>
                    </View>
                }
                {/* <Button title = "log out" onPress = {()=> logout()}/> */}
                
                {thisweekTasks.length != 0 && 
                    <View>
                        <Text style = { styles.headerTwoText }>This Week</Text>
                    <View style = {tailwind("items-center mt-10")}>
                    {thisweekTasks.map((item,index) =>{
                        return(<TaskCard taskName = {item.title}  cardImageUrl = {item.cardImageUrl} time = {item.TaskTime.toDate() }key = {index} image = {item.profilePics} isToday = {false}/>)})}
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
        marginTop:          60
    },

    headerTwoText: {
        fontSize:           15,
        fontFamily:         "Sofia-Pro-Regular",
        textTransform:      'uppercase',
        paddingTop:         10,
    },
});

export default TaskHomeScreen;
