import React from 'react'; 
import {Text,View, StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native'; 

import{ CATEGORIES} from '../data/dummy-data';




const CategoriesScreen  =(props ) =>{
    const renderGridItem =(itemData)=>{
        return (
                <TouchableOpacity   onPress={
                    ()=>{props.navigation.navigate({routeName:'Detail'})    }
                }
                
                >
                <View style={styles.gridItem}>
                    <Text style={styles.title } >{itemData.item.title}</Text>
                   
                </View>
                </TouchableOpacity>
    
        ); 
    };
        
    
    return(
       <FlatList
        data={CATEGORIES} 
        renderItem ={ renderGridItem}
        keyExtractor={(item,index) => item.id}
        numColumns={2}
         />
    ); 

} 

CategoriesScreen.navigationOptions ={
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: 'red',
    }
}; 

const styles = StyleSheet.create({
    screen:{
        
        alignItems:'center', 
        
    }, 
    title :{
        fontFamily: 'open-sans',

    }, 
    gridItem:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:15,
        height:150,


    },

}); 

export default CategoriesScreen; 
