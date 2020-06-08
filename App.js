import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import * as Font from 'expo-font'; 
import {AppLoading} from 'expo';


const fetchFont =() => {
  return Font.loadAsync ({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf' ),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf' )
  }); 

}; 

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false); 

  if (!fontLoaded){
    return <AppLoading 
    startAsync={fetchFont} 
    onFinish={()=>setFontLoaded(true)} />  ;
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open up App.js to start working on your app! Test</Text>
      <Text >Open up App.js to start working on your app! Test</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title :{
    fontFamily: 'open-sans-bold',

}
});
