import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskCard from './components/TaskCard';
import * as Font from "expo-font";
import TaskHomeScreen from './screens/TaskHomeScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadFonts = async () => {
      await Font.loadAsync({
          "Recoleta-Regular": require("./assets/fonts/Recoleta-Regular.ttf"),
          "Recoleta-Bold": require("./assets/fonts/Recoleta-Bold.ttf"),
      });
      setIsLoaded(true);
  };

  useEffect(() => {
      loadFonts();
  }, [])
  // const saveUserToDB = async(user) =>{
  //   await API.graphql(graphqlOperation(createUser,{input: user}))
  // }

  // useEffect(() =>{
  //   const updateUser = async()=>{
  //     const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true})
  //     if (userInfo){
  //       console.log(userInfo.attributes.sub)
  //       const userData = await API.graphql(graphqlOperation(getUser,{id:userInfo.attributes.sub}))
  //       if (!userData.getUser){
  //         const user = {
  //           id: userInfo.attributes.sub,
  //           username: userInfo.username,
  //           name: userInfo.username,
  //           image: 'dummy'
  //         }
  //         console.log(user)
  //         saveUserToDB(user);
  //       } else{
  //         console.log("user alr exists");
  //       }
  //     }
      
  //   }
  //   updateUser();
  // }
  // ,[])
  

  
  
  return(
    isLoaded?(
      <TaskHomeScreen/>
    ):(<View><Text>Still Loading</Text></View>)

    // <Tweet/>
  );
}

// export default withAuthenticator(App)
export default App;
