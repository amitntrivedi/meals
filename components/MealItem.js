import React from 'react'; 
import {Text,View, StyleSheet, Button,FlatList,TouchableOpacity, Platform, TouchableNativeFeedback,ImageBackground} from 'react-native'; 

import{ CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors'; 


const MealItem  =(props ) =>{

    return(
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={styles.mealItem} >
            <View style={{...styles.mealRow, ...styles.mealHeader} }>
                <ImageBackground source={ {uri:props.image}}  style={styles.bgImage}     >
                <Text style={styles.title} numberOfLines={1} > {props.title}  </Text>
                </ImageBackground> 
                </View>
                
            <View style={{...styles.mealRow, ...styles.mealDetail} }>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableOpacity>
    ); 

}; 

const styles = StyleSheet.create({
    mealRow:{
        flexDirection:'row'
    },
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        marginVertical: 10,
        
        
    },
    mealHeader:{
        height:'90%',
    }, 
    mealDetail :{
        paddingHorizontal:10,
        justifyContent:'space-between'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    }
    ,title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        color:'white',
        backgroundColor: 'rgba(0,0,0,0.5)'   ,
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign: 'center'

    }


}); 

export default MealItem; 