import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImagePath } from '../component/Index'



const Profile = ({ }) => {
  return (
    <View>

     

        <View >
<Image source={ImagePath.Color}/>

        </View>
     
      <View style={styles.secondcalss}>
        <View>
          <TextInput style={styles.Text} placeholder='FULL NAME ' />
        </View>
        <View style={styles.Text}>
          <Text style={styles.Text1}>My Account</Text>
          <Text>Favourits. offers &</Text>

        </View>
        <View style={styles.Text}>
          <Text style={styles.Text1}>Addresses</Text>
          <Text>Share.Edite & Addnew Addresses</Text>
        </View>
        <View style={styles.Text}>
          <Text style={styles.Text1}>Payments & Refunds</Text>
          <Text>Refunds Status & Payments Modes</Text>
        </View>
        <View style={styles.Text}>
          <Text style={styles.Text1}>Help</Text>
          <Text>FAQ & Links</Text>
        </View>
        <View>
          <Text style={styles.Logo}>LOGOUT</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text>Logout</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>

  )
}

export default Profile

const styles = StyleSheet.create({

  secondcalss: {
    borderWidth: 1,
    borderColor: 'black',
    height: 450,
    width: 350,
    alignSelf: 'center',
    marginTop: -150,
    backgroundColor: '#fff2f2',

  },



  Text: {
    borderWidth: 1,
    width: 330,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    color: 'black',
    padding: 6,
  },

  Text1: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',


  },

  Logo: {

    fontSize: 15,
    color: 'black',
    marginLeft: 12,
    marginTop: 10,
    fontWeight: '600',




  },

  btn: {
    backgroundColor: '#fe5f04eb',
    width: 330,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 6,


  },
  btntext: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff'
  },









})