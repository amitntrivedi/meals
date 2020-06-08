import React from 'react'; 
import {Text,View, StyleSheet} from 'react-native'; 

const CategoriesScreen =(props ) =>{

    return(
        <View style={styles.screen}>
            <Text  style={styles.title}>Categories Screen</Text>
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
