import React from 'react'; 
import {Text,View, StyleSheet,Button} from 'react-native'; 

const CategoryMealsScreen =(props ) =>{

    return(
        <View style={styles.screen}>
            <Text >Category 123 Meals Screen</Text>
            <Button title='Go to Detail ' onPress={
               ()=>{props.navigation.navigate({routeName: 'Detail'})}
           } /> 
        </View>
    ); 

} 

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center', 
        justifyContent: 'center',
    }

}); 

export default CategoryMealsScreen; 
