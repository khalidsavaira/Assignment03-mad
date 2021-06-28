import React,{useState} from "react"
import { StyleSheet, Text, View,Button, TextInput} from 'react-native';
export default function AddTodo({SubmitHandler}){
    const [text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val);
    }
    return(
    <View>
        <TextInput style={styles.input}
        placeholder="New item"
        onChangeText={changeHandler}  
        />
        <View style={styles.btnnn}>
        <Button onPress={()=>SubmitHandler(text)} title="add item" color='red'/>
        </View>
        </View>
        )
}
const styles = StyleSheet.create({
    btnnn:{
        marginBottom:-30

    },
    input:{
        marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderColor:'#ddd',
        borderWidth:3,
        borderRadius:9
    }
})