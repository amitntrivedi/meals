import { createStackNavigator, createBottom   } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

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

const MealFavTabNavigator = createBottomTabNavigator ({
  Meals: MealsNavigator, 
  Favorit : FavoritesScreen,
}); 

 

export default  createAppContainer( MealFavTabNavigator); 
