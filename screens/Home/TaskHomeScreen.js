import React, { useEffect, useState,useContext } from "react";
import { View, ScrollView, Text, StyleSheet,Button } from "react-native";
import { AuthContext } from "../../provider/AuthProvider";
import tailwind from "tailwind-rn";
import TaskCard from "../../components/TaskCard";
import { getTaskByUser } from "../../actions/TaskActions";


function TaskHomeScreen(props) {
    // const { username} = useContext(AuthContext);
    const { setIsLoggedIn,isLoggedIn,username } = useContext(AuthContext);
    const [tasks,setTaskList] = useState([])
     useEffect(()=>{
        console.log("hi")
        console.log(username)
        getTaskByUser(username).then(response => setTaskList(response))
        
    },[])
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
                                <TaskCard taskName = {item.description} time = {item.TaskTime} cardImageUrl = {item.cardImageUrl} key = {index} pets = {item.pets}/>
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
