import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, StyleSheet, View } from 'react-native'
import firebase from '../../config/firebaseConfig'
import CarouselItem from './CarouselItem'


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
        // else {
        //     scrollValue = 0
        //     scrolled = 0
        // }
        
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
       
        const unsubscribe = firebase.firestore().collection("pets").doc(props.id).onSnapshot((querySnapshot) =>{
            let array = querySnapshot.data().photos;
            setDataList(array)
            infiniteScroll(dataList,mySlide)
        })
        
        return ()=> {unsubscribe()}
        
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
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 10, borderRadius: 15 }}
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