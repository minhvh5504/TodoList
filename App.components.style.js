import {StyleSheet} from 'react-native';
import color from './components/contains/color'
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: color.background,
    },
    body:{
      flex:1,
      paddingTop: 30,
    },
    header:{
      fontSize:40,
      fontWeight:'bold',
      color: color.primary,
    },
});
    
export default styles;