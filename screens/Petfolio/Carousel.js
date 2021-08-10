import React, { useState, useEffect,useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from './CarouselItem'
import { getPetDetails } from '../../actions/PetActions'
import firebase  from '../../firebaseConfig'


const { width, height } = Dimensions.get('window')
let flatList

function infiniteScroll(dataList,mySlide){

    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData){
            scrollValue = scrollValue + width
        }
        else {
            scrollValue = 0
            scrolled = 0
        }
        
        if (mySlide.current) {
            mySlide.current.scrollToOffset({
                animated: true,
                offset: scrollValue,
            });
        }
        
    }, 3000)
}


function Carousel(props) {

    const mySlide = useRef();
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState([])

    useEffect(()=> {
        // return new Promise((resolve,reject) =>{
        //     firebase.firestore().collection("pets").doc(id).get().then((querySnapShot)=>{
                
        //         resolve(querySnapShot);
        //     }).catch(error =>{
        //         console.log(error)
        //         console.log("getPetDetails error")
        //     })
        // })
        const unsubscribe = firebase.firestore().collection("pets").doc(props.id).onSnapshot((querySnapshot) =>{
            let array = querySnapshot.data().photos;
            setDataList(array)
            infiniteScroll(dataList,mySlide)
        })

        // getPetDetails(props.id).then((response) => {
            
        //     let array = response.data().photos;
        //     setDataList(array)
        //     console.log(dataList)
        //     infiniteScroll(dataList)
        // })
        
        return ()=> {unsubscribe()}
            
        // setDataList(props.data)
        
    },[])


    if (dataList) {
        return (
            <View>
                <FlatList data={dataList}
                    ref={mySlide}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle = {16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                />

                <View style={styles.dotView}>
                    {dataList.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})

export default Carousel