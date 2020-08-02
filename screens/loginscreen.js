import React,{Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import db from '../config';
import firebase from 'firebase';

export default class Loginscreen extends Component{
    constructor(){
        super();
        this.state={emailid:'', password:''}
    }
    userlogin=(emailid, password)=>{firebase.auth().signInWithEmailAndPassword(emailid, password).then
        (()=>{return Alert.alert("successfully loggeed in") })
    .catch((error)=>{var errorcode=error.code; 
    var errormessage=error.message;
return Alert.alert(errormessage)})
    }
    usersignup=(emailid, password)=>{firebase.auth().createUserWithEmailAndPassword(emailid, password).then
        ((response)=>{return Alert.alert("successfully created user") })
    .catch((error)=>{var errorcode=error.code; 
    var errormessage=error.message;
return Alert.alert(errormessage)})
    }


    render(){
        return(
            <View style = {styles.container}>
            <View><Text>BOOK SANTA</Text></View>
            <View><TextInput style={styles.loginbox}placeholder="abc@example.com"
            keyboardType='email-address'
            onChangeText={(text)=>{this.setState({emailid:text})}}/>
            <TextInput style={styles.loginbox}placeholder="enter password"
            secureTextEntry={true}
            onChangeText={(text)=>{this.setState({password:text})}}/>
            <TouchableOpacity style={styles.button}onPress={()=>{this.userlogin(this.state.emailid, this.state.password)}}><Text>login</Text></TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.usersignup(this.state.emailid, this.state.password)}}><Text>signup</Text></TouchableOpacity>
            </View>
            </View>

        )

    }
    
}
const styles = StyleSheet.create({
    container:{flex:1, 
        backgroundColor:'red'},
    loginbox:{width:100,
        height:50, 
        fontSize:16, 
        margin:10},
    button:{ width:300, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:25, 
        backgroundColor:"#ff9800", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, 
            height: 8, }, 
            shadowOpacity: 0.30, 
            shadowRadius: 10.32, 
            elevation: 16, },

})