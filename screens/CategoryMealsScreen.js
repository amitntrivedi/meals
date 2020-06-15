import React from 'react'; 
import {Text,View, StyleSheet,Button, FlatList} from 'react-native'; 
import {CATEGORIES, MEALS} from '../data/dummy-data'; 
import { useSelector} from 'react-redux'; 
import MealItem from '../components/MealItem';


const CategoryMealsScreen =(props ) =>{
    const catId= props.navigation.getParam('categoryId'); 
   // const availableMeals = useSelector(state => state.meals.filteredMeals); 

    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(catId) >=0); 
  

    const renderMealItem =(itemData) =>{
        return(
        <MealItem 
        title ={itemData.item.title}
        image ={itemData.item.imageUrl}
        duration = {itemData.item.duration}
        complexity = {itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={  
            ()=>{   
                    props.navigation.navigate({
                        routeName:'Detail', 
                        params:{
                            mealId:itemData.item.id
                        }
                    })    
                }
            }
        />
        ); 
    }; 
    
    return(
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item,index) => item.id}
                renderItem ={renderMealItem}
                style={{width:'100%'}}
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
