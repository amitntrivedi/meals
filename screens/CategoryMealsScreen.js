import React from 'react'; 
import {Text,View, StyleSheet,Button, FlatList} from 'react-native'; 
import {CATEGORIES, MEALS} from '../data/dummy-data'; 


const CategoryMealsScreen =(props ) =>{
    const catId= props.navigation.getParam('categoryId'); 
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(catId) >=0); 

    const renderMealItem =(itemData) =>{
        return(
            <View >
                <Text >Meals Title: {itemData.item.title}  </Text>
            </View>
        ); 
    }; 
    
    return(
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item,index) => item.id}
                renderItem ={renderMealItem}
            />
        </View>
    ); 

} 

CategoryMealsScreen.navigationOptions = (navigationOptions) =>{
   
    const catId=  navigationOptions.navigation.getParam('categoryId'); 
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId); 

    return({
        headerTitle: selectedCategory.title
       
    }); 

}; 

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center', 
        justifyContent: 'center',
        
    }

}); 

export default CategoryMealsScreen; 
