
import {StyleSheet} from 'react-native';
import color from './../contains/color'

const styles = StyleSheet.create({
    addTask:{
        bottom: 30,
        paddingHorizontal: 20,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    input:{
        height:44,
        width:'85%',
        backgroundColor: color.white,
        borderWidth:3,
        borderColor: color.primary,
        borderRadius:25,
        paddingHorizontal: 25,
        paddingVertical: 10,
        color: color.text,
    },
    iconWapper:{
        width:44,
        height:44,
        backgroundColor:color.primary,
        borderRadius:44,
        borderWidth:2,
        borderColor:color.background,
        alignItems:'center',
        justifyContent:'center',
    },
    icon:
    {
        fontSize:28,
        color: color.white,

    }
})
export default styles;
