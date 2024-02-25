import {StyleSheet,Text,View,Image,Dimensions} from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get('screen')

const HomeScreen = () => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.imageBackground} src = {'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/06/Anh-nen-iPhone_10.jpeg'}/>
        </View>
    )
}

export default HomeScreen;
const styles = StyleSheet.create({
container:{
   flex:1,


},
imageBackground:{
    width: width,
    height: height,
    position:'absolute',
}
});