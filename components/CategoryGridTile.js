import React from 'react'; 
import {Text,View, StyleSheet, Button,FlatList,TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native'; 

import{ CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors'; 



const CategoryGridTile  =(props ) =>{
    let TouchableCmp = TouchableOpacity; 

    if (Platform.OS === 'android'  ){
        TouchableCmp = TouchableNativeFeedback; 
    }

return (
    <View   style={styles.gridItem}>
    <TouchableNativeFeedback   style={{flex:1}}
    onPress={props.onSelect} >
    <View style={ {...styles.container, ...{backgroundColor: props.color}}}>
        <Text style={styles.title } numberOfLines={2} >{ props.title}</Text>
        
    </View>
    </TouchableNativeFeedback>
    </View>
    
    ); 
} ;


const styles = StyleSheet.create({
    
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:'hidden'
    },
    title :{
        fontFamily: 'open-sans-bold',
        fontSize:22,
        textAlign:'right'

    }, 
    container:{
        flex:1, 
        elevation:10,
        borderRadius:10,
        padding: 10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        
    }


}); 

export default CategoryGridTile; 
