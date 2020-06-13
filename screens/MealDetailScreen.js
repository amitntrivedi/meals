import React from 'react'; 
import {Text,View, StyleSheet, ImageBackground} from 'react-native'; 
import {HeaderButtons, Item } from 'react-navigation-header-buttons'; 
import {CATEGORIES, MEALS} from '../data/dummy-data'; 
import Meal from '../models/meal';
import CustomHeaderButton from '../components/HeaderButton'; 

const MealDetailScreen =(props ) =>{
    const mealId =props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return(
        <View style={styles.screen}>
            <Text >Meal Detail   {selectedMeal.id}</Text>
            <Text >Title {selectedMeal.imageUrl.title}</Text>
            <ImageBackground source={ {uri:selectedMeal.imageUrl}}  style={styles.bgImage}     >

            </ImageBackground>
        </View>
    ); 

} 
MealDetailScreen.navigationOptions = (navigationOptions) =>{
   
    const mealId =navigationOptions.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return({
        headerTitle: selectedMeal.title,
        headerRight: ()=>( <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}> 
            <Item 
            title='favourit' 
            iconName='ios-star' 
            onPress={()=>{ console.log('fav pressed');} }
             />
        </HeaderButtons> )

       
    }); 

}; 

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center', 
        justifyContent: 'center',
    }, 
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    }


});  

export default MealDetailScreen; 
