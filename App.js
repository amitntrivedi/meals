import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import * as Font from 'expo-font'; 
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import {createStore, combineReducers } from 'redux'; 
import {mealsReducer} from './store/reducers/meals';
import { Provider} from 'react-redux'; 

const rootReducer = combineReducers({
  meals: mealsReducer
}); 

const store= createStore( rootReducer
); 

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
    <Provider  store={store}  >
    <MealsNavigator />
    </Provider>
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
