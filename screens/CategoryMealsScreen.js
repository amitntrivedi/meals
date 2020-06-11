import React from 'react'; 
import {Text,View, StyleSheet,Button} from 'react-native'; 
import {CATEGORIES} from '../data/dummy-data'; 
 

const CategoryMealsScreen =(props ) =>{
    const catId= props.navigation.getParam('categoryId'); 
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId); 

    return(
        <View style={styles.screen}>
            <Text >Category 123 Meals Screen {catId}</Text>
            <Text >Category Title:  {selectedCategory.title}</Text>
            <Text >Category Id:  {selectedCategory.id}</Text>
            <Text >Category Color:  {selectedCategory.color}</Text>
            <Button title='Go to Detail ' onPress={
               ()=>{props.navigation.navigate({routeName: 'Detail'})}
           } /> 
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
