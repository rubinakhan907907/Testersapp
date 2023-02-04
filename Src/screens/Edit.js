import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Edit = () => {
  return (
    <View style={styles.mainview}>
       <View style={styles.maincontener}>
          <Text style={styles.setting1}>SETTINGS</Text>
            <Text style={styles.setting}>PICTURE IN PICTURE MODE</Text>
              <Text style={styles.contner}></Text>
        </View>
        <View >
            <Text style={styles.Texton}>Allow picture in picture mode</Text>
            {/* <Image/> */}
            {/* <Image/> */}
        </View>
                  <Text style={styles.contner}></Text>
                <View style={styles.contener2}>
          <Text>PIP mode allows you to live track your order in a small window pinned to one corner of your screen while you navigate to other apps or to the home screen  </Text>
                <Text style={styles.smstext}>SMS PREFERENCES </Text>
                   <Text style={styles.ordertext}>Order related SMS cannot be disabled as they are ceitical to provide service </Text>
                        <Text style={styles.contner1}></Text>
                   </View>
               <View>
            <Text style={styles.Texton}>Recommendations & Reminbers </Text>
            {/* <Image/>
            <Image/> */}
        </View>
         <Text style={styles.dote2}></Text>
         <View>
            <Text style={styles.lasttext}>Keep this one to receive offer Recommendations & timely reminders basedon your interests</Text>
         </View>
    </View>
  )
}

export default Edit

const styles = StyleSheet.create({


    mainview:{
        backgroundColor:'#f4d5bd2b',
    },
    maincontener:{
        marginVertical:10,

    },
    setting:{
        fontSize:17,
        fontWeight:'bold',
        color:'#000',
        marginHorizontal:15,

    },

    setting1:{
        color:'#000',
        marginHorizontal:15,
        marginVertical:5,

    },

    contner:{
        borderBottomColor:'#000',
        borderBottomWidth:1,
        marginHorizontal:10,
        marginVertical:10,

    },
     
      Texton:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold',
        marginHorizontal:10,
        

      },



      contener2:{
         marginHorizontal:10,

      },


        smstext:{
            marginVertical:30,
            color:'#000',

        },

        ordertext:{
             
            marginVertical:-12,

        },

        contner1:{
            borderBottomColor:'#000',
            borderBottomWidth:1,
            marginVertical:18,

            
        },

          dote2:{
             
            borderBottomColor:'#000',
            borderBottomWidth:1,
            marginHorizontal:10,
             marginVertical:15,
              
          },

           lasttext:{
             
            marginVertical:20,
            marginHorizontal:10,

           },
})