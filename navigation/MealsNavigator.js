import React from 'react';
import { createStackNavigator, createBottom   } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'; 
import CategoryMealsScreen from '../screens/CategoryMealsScreen'; 
import FavoritesScreen from '../screens/FavoritesScreen'; 
import MealDetailScreen from '../screens/MealDetailScreen';
import { exp } from 'react-native-reanimated';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';


const MealsNavigator =createStackNavigator ( {
    Categories:{
        screen: CategoriesScreen,navigationOptions:{
            
        }
    }  ,
    CategoryMeals:{
        screen: CategoryMealsScreen,navigationOptions:{
           
        }
    }  ,
    Detail:{
        screen: MealDetailScreen,navigationOptions:{
            
        }
    }  ,
     
     
},{

 
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Colors.primaryColor
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },

    }
       
    
 
 
); 

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);
 

export default  createAppContainer( MealsFavTabNavigator); 
