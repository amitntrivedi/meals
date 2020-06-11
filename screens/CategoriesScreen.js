import React from 'react'; 
import {Text,View, StyleSheet, Button,FlatList,TouchableOpacity, Platform} from 'react-native'; 

import{ CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors'; 
import CategoryGridTile from '../components/CategoryGridTile'; 




const CategoriesScreen  =(props ) =>{
    const renderGridItem =(itemData)=>{
        return (
            <CategoryGridTile  
            color={itemData.item.color}
            title={itemData.item.title} 
            onSelect={  
                ()=>{   
                        props.navigation.navigate({
                            routeName:'CategoryMeals', 
                            params:{
                                categoryId:itemData.item.id
                            }
                        })    
                    }
            } />
    
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
    //headerTitle: 'Meal Categories',
    
    
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
