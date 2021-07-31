import React, { useEffect, useState,useContext } from "react";
import { View, ScrollView, Text, StyleSheet,Button } from "react-native";
import { AuthContext } from "../../provider/AuthProvider";
import tailwind from "tailwind-rn";
import TaskCard from "../../components/TaskCard";
import { getTaskByUser } from "../../actions/TaskActions";
import firebase from "../../firebaseConfig"


function TaskHomeScreen(props) {
    // const { username} = useContext(AuthContext);
    const { setIsLoggedIn, isLoggedIn, username } = useContext(AuthContext);
    const [tasks, setTaskList] = useState([])

     useEffect(()=>{
        console.log("hi")
        console.log(username)
        const unsubscribe = firebase.firestore().collection("UserTasks").where("userID","==",username).onSnapshot(querySnapShot=>{
            let UserTasks = []
            querySnapShot.forEach((doc)=>{
                console.log(doc.data())
                UserTasks.push(doc.data())
            })
            setTaskList(UserTasks)
            console.log(UserTasks)
        })
        return () => unsubscribe();
    },[])
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
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
                <Text style = {styles.headerText}> Upcoming </Text>
                <Text style={styles.headerDay}> Today </Text>

                <Button title = "log out" onPress = {()=> logout()}/>
                    <View style = {tailwind("items-center mt-10")}>
                        {/* <TaskCard time = "3hrs" />
                        <TaskCard />
                        <TaskCard /> */}
                        {tasks.map((item,index) =>{
                            return(
                                <TaskCard taskName = {item.description}  cardImageUrl = {item.cardImageUrl} time = {formatAMPM(item.TaskTime.toDate()) }key = {index} pets = {item.pets}/>
                            )
                        })

                        }
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

    headerText: {
        fontSize: 40,
        fontFamily: "Recoleta-Regular",
    },

    headerDay: {
        fontSize: 23,
        fontFamily: "Recoleta-Regular",
    },
});

export default TaskHomeScreen;
