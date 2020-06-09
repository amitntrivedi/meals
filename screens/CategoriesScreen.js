import React from 'react'; 
import {Text,View, StyleSheet, Button} from 'react-native'; 




const CategoriesScreen  =(props ) =>{
    
    return(
        <View style={styles.screen}>
            <Text  style={styles.title}>Categories Screen</Text>
           <Button title='Go to category meal ' onPress={
               ()=>{props.navigation.navigate({routeName: 'Meals'})}
           } /> 
        </View>
    ); 

} 

const styles = StyleSheet.create({
    screen:{
        
        alignItems:'center', 
        
    }, 
    title :{
        fontFamily: 'open-sans',

    }

}); 

export default CategoriesScreen; 
