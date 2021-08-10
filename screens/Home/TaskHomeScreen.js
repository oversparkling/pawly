import React, { useEffect, useState,useContext } from "react";
import { View, ScrollView, Text, StyleSheet,Button } from "react-native";
import { AuthContext } from "../../provider/AuthProvider";
import tailwind from "tailwind-rn";
import TaskCard from "../../components/TaskCard";
import { getTaskByUser } from "../../actions/TaskActions";
import firebase from "../../firebaseConfig"
import ListItemSwipeable from "react-native-elements/dist/list/ListItemSwipeable";
import { getPetProfilePicture } from "../../actions/PetActions";

function TaskHomeScreen(props) {

    // const { username} = useContext(AuthContext);
    const { setIsLoggedIn, isLoggedIn, username } = useContext(AuthContext);
    const [tasks, setTaskList] = useState([])
    const [todayTasks,setTodayTasks] = useState([])
    const [thisweekTasks, setThisWeekTasks] = useState([])

    useEffect(()=>{
    
        var beginningDate = Date.now();
        var beginningDateObject = new Date(beginningDate);
        var endDate =  Date.now() + 604800000;
        var endDateObject = new Date(endDate);
        
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
            
            // console.log(UserTasks)
        })
        return () => {
            unsubscribe()
        };
    },[])

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = date.getDate() + " " + monthNames[date.getMonth()] + " "  + hours + ':' + minutes + ' ' + ampm;
      
      return strTime;
    }

    const logout = () =>{
        setIsLoggedIn(false)
        console.log(isLoggedIn)
    }
    
    return (
        <View style = { styles.container }>
            <ScrollView showsVerticalScrollIndicator = { false }>
                {/* Headers */}
                <Text style = { styles.headerOneText }>Upcoming</Text>
                <Text style = { styles.headerTwoText }>Today</Text>

                {/* <Button title = "log out" onPress = {()=> logout()}/> */}
                <View style = { tailwind("items-center mt-5") }>
                    {todayTasks.map((item,index) =>{
                        let imageArray = []
                        item.pets.forEach(petname => {
                            getPetProfilePicture(petname,username).then(response => {
                                console.log("Added")
                               imageArray.push(response)
                        })})
                        return(<TaskCard taskName = { item.description }  cardImageUrl = { item.cardImageUrl } time = { formatAMPM(item.TaskTime.toDate()) }key = {index} image = {item.profilePics}/>)})}
                </View>
                
                <Text style = { styles.headerTwoText }>This Week</Text>
                <View style = {tailwind("items-center mt-10")}>
                    {thisweekTasks.map((item,index) =>{
                        console.log("Pets: " + item.pets )
                        return(<TaskCard taskName = {item.description}  cardImageUrl = {item.cardImageUrl} time = {formatAMPM(item.TaskTime.toDate()) }key = {index} image = {item.profilePics}/>)})}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width:              "100%",
        backgroundColor:    "white",
        paddingLeft:        30,
        paddingRight:       30,
        paddingTop:         60,
    },

    headerOneText: {
        fontSize:           36,
        fontFamily:         "Recoleta-Regular",
    },

    headerTwoText: {
        fontSize:           15,
        fontFamily:         "Sofia-Pro-Regular",
        textTransform:      'uppercase',
        paddingTop:         10,
    },
});

export default TaskHomeScreen;
