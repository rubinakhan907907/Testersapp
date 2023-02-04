import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({}) => {
  return (
    <View style={{flex:1}}>
        <View style={styles.firstinput}>
        <TextInput placeholder='Enter the name'/>

        </View>
        <View style={styles.secondInput}>
        <TextInput placeholder='Enter the name'/>

        </View>
        <TouchableOpacity  style={styles.Login}>
            <Text style={{textAlign:'center'}}>LogIn</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login

const styles =StyleSheet.create({
    firstinput:{
        backgroundColor:'red',
      margin:8, padding:5, borderRadius:20,
    },
    secondInput:{
        backgroundColor:"orange",
        margin:8, padding:5, borderRadius:20,
    },
  Login:{
        backgroundColor:"green",
        height:40,justifyContent:"center",
        borderRadius:20,margin:10,
    },
    
})