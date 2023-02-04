import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react';
// import Button from '../Component/Button';

const First = () => {
    const [data, setData] = useState('')
    const getdate = async () => {
        let data = await fetch('https://fakestoreapi.com/products')
        let abc = await data.json()
        setData(abc)

    }

    useEffect(() => {
        getdate()
    }, [])


    // const onShare = async () => {
    //     try {
    //         const result = await Share.share({
    //             message:
    //                 'React Native | A framework for building native apps using React',
    //         });
    //         if (result.action === Share.sharedAction) {
    //             if (result.activityType) {
    //                 // shared with activity type of result.activityType
    //             } else {
    //                 // shared
    //             }
    //         } else if (result.action === Share.dismissedAction) {
    //             // dismissed
    //         }
    //     } catch (error) {
    //         Alert.alert(error.message);
    //     }
    // }

    return (
        <View>
           
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.sam}>

                            <View style={styles.box1}>
                                <Image style={styles.box2} source={{ uri: item?.image }} />
                                <View style={styles.box3}>
                                    <Text style={styles.box4}>{item?.title}</Text>
                                    <Text style={styles.box5}>{item?.price}</Text>
                                    <Text style={styles.box6}>{item?.category}</Text>
                                    <Text style={styles.box8}>{item.description}</Text>
                                    
                                </View>
                            </View>
                           
                        </View> 
                        
                    )
                }}
            />
        </View>

    )
}

export default First

const styles = StyleSheet.create({
    box1: {
        flexDirection: "row",
        marginTop: 20,
       backgroundColor:'snow',
       borderRadius:15,



    },
    box2: {
        width: '40%',
        height: 130,
        marginTop:40,


    },
    box3: {
        marginTop: 40,
        marginLeft: 5,
        width:'60%',
        height:250
    },
    sam: {
        backgroundColor: '#c0c0c0',
    },
    box4: {
        color: 'black',
        fontWeight: '800'
    },
    box5: {
        color: 'black',
        fontWeight: '800'

    },
    box6: {
        color: 'black',
        fontWeight: '800'

    },
    box7: {
        color: 'black'
    },
    box8: {
        color: 'black'
    },
    sdm: {
        backgroundColor: 'red',
        width: '16%',
        height: 30,
        justifyContent: 'center',
        borderRadius: 10
    },
    box9: {
        fontSize: 25,
        marginLeft: -9,
        color: '#fff'
    },
    box10: {
        fontSize: 22,
        marginLeft: 5,
        color: '#fff'

    },
    box11: {
        fontSize: 25,
        marginLeft: 7,
        color: '#fff'

    },
    box12: {
        width: '10%',
        height: 25
    },
    box13: {
        flexDirection: 'row'
    }

})