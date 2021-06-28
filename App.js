import React, { useState, useEffect } from 'react';
import WelcomeScreenfinal from './welcomeScreenfinal';
import ViewImageScreen from './ViewImageScreen';
import Screens from './HomeStackNavigator'
import LoginPage from './screens/loginPage';
import ProfilePage from './screens/profilePage';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './screens/tabs';
import Task from './screens/TaskPage';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import {getUser} from './src/graphql/queries'
import {createUser} from './src/graphql/mutations'
import AddPets from './screens/addPets';
import Tweet from './screens/profilePage/components/tweet';
import RegistrationConfirmation from './screens/registerConfirmation';
import TaskCard from './screens/TaskHomePage/components/TaskCard';
import * as Font from "expo-font";
import { View,Text } from 'react-native';
import TaskHomePage from './screens/TaskHomePage';
Amplify.configure(config)

 

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
      <TaskHomePage/>
    ):(<View><Text>Still Loading</Text></View>)

    // <Tweet/>
  );
}

// export default withAuthenticator(App)
export default App;


