import { createStackNavigator   } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'; 
import CategoryMealsScreen from '../screens/CategoryMealsScreen'; 
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

export default  createAppContainer( MealsNavigator); 
