import React,{useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,FlatList,View,Image } from 'react-native';
export default function App() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Shopping Cart</Text> 
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height:100,
    paddingTop:30,
    backgroundColor:'red'
  },
  title:{
      textAlign:'center',
      fontSize:25,
      fontWeight:"bold",
      fontFamily:"cursive",
      color:"black"
  }
});
