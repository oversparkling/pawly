import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import BackButton from '../commonComponents/BackButton';
import { MaterialIcons } from '@expo/vector-icons';

function Task(props) {
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
                    <View style = {styles.individualItems}>
                        <MaterialIcons name="cleaning-services" size={24} color="black" />
                        <Text style = {{fontSize:18}}>Brush</Text>
                    </View>
                    <View style = {styles.individualItems}>
                        <MaterialIcons name="cleaning-services" size={24} color="black" />
                        <Text style = {{fontSize:18}}>Brush</Text>
                    </View>
                    <View style = {styles.individualItems}>
                    <MaterialIcons name="cleaning-services" size={24} color="black" />
                        <Text style = {{fontSize:18}}>Brush</Text>
                    </View>
                    <View style = {styles.individualItems}>
                        <MaterialIcons name="cleaning-services" size={24} color="black" />
                        <Text style = {{fontSize:18}}>Brush</Text>
                    </View>
                    <View style = {styles.individualItems}>
                        <MaterialIcons name="cleaning-services" size={24} color="black" />
                        <Text style = {{fontSize:18}}>Brush</Text>
                    </View>
                    <View style = {styles.individualItems}>
                        <MaterialIcons name="cleaning-services" size={24} color="black" />
                        <Text style = {{fontSize:18}}>Brush</Text>
                    </View>
                    <View style = {styles.individualItems}>
                        <MaterialIcons name="cleaning-services" size={24} color="black" />
                        <Text style = {{fontSize:18}}>Brush</Text>
                    </View>
                    <View style = {styles.individualItems}>
                        <MaterialIcons name="cleaning-services" size={24} color="black" />
                        <Text style = {{fontSize:18}}>Brush</Text>
                    </View>

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