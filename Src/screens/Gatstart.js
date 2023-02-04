import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React from 'react'


const Gatstart = ({ navigation }) => {
  return (


    <View style={styles.firstcalls}>
       {/* <ImageBackground source={require('../assest/images/back.png')} style={{ height: '75%', }}> */}
        <View>
         </View>
      {/* </ImageBackground> */}
      <View style={{ width: '80%', alignSelf: 'center', borderWidth: 1, height: 450, marginTop: -280, backgroundColor: 'white', borderColor: 'gray', }}>

       <View>
           <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}>SignS Up</Text>
        </View>
         <View>
           <TextInput style={styles.firstInput} placeholder='Enter email' />
         </View>
         <View>
            <TextInput style={styles.firstInput} placeholder='Password' />
             </View>
                <View>
                <TextInput style={styles.firstInput} placeholder='Confirmpassword' />
                   </View>
                     <View>
                <TextInput style={styles.firstInput} placeholder='Number' />
         </View>
         <View>
                    <TouchableOpacity style={styles.btn}>
                      <Text>SignUp</Text>
                      </TouchableOpacity>
                    </View>
               <View style={styles.Register}>
              <Text>Donthavean account?</Text>
             <Text style={{ color: 'red' }}>Register</Text>
        </View>
             </View>
                 </View>

  )
}

export default Gatstart

         const styles = StyleSheet.create({
      firstInput: {
        borderWidth: 1,
          borderColor: 'red',
           borderRadius: 10,
             alignSelf: 'center',
                 width: '90%',
                   marginVertical: 10,
                      backgroundColor: 'pink',


              },
                btn: {
                       alignSelf: 'center',
                   width: '90%',
            padding: 10,
             backgroundColor: 'red',
                 borderRadius: 10,
               },
              btnText: {
                fontSize: 35,
             alignSelf: 'center',
              color: 'white',

          },
              Register: {
        flexDirection: 'row',
               alignSelf: 'center',
             marginTop: 10,

         },

})








