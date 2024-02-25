import {StyleSheet} from 'react-native';
import color from './../contains/color'

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        backgroundColor: color.yellow1,
        marginBottom:15,
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-between',
      },
      number:{
        fontSize:16,
        fontWeight:'700',
      },
      square:{
        width:44,
        height:44,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
      },
      even:{
        backgroundColor: color.brown,
        color: color.yellow2,
      },
      odd:{
        backgroundColor:color.second,
        color: color.black,
      },
      content:
      {
        fontSize:25,
        width:'55%',
      
      },
})
export default styles;