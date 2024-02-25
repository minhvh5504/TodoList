import  StatusBar from 'expo-status-bar';
import React ,{useState} from 'react';
import {View,Text,Keyboard,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native'

import styles from './style';

const Form = (props) => {
    const [task,setTask] = useState('');

    const handleAddTask = () =>{
        if(task.length === 0)
        {
            alert('Vui lòng nhập thông tin!!!')
            return false;
        }
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        keyboardVerticalOffset =  {10}
         style = {styles.addTask}>

        <TextInput value = {task}
        onChangeText ={(text) => setTask(text)}
            placeholder='Your Task'
             style = {styles.input}/>

        <TouchableOpacity 
                onPress ={handleAddTask}>
                <View style ={styles.iconWapper}> 
                    <Text style ={styles.icon}>+</Text>
                </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
       
    )
}

export default Form;