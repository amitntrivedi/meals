import { createStackNavigator   } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'; 
import CategoryMealsScreen from '../screens/CategoryMealsScreen'; 
import { exp } from 'react-native-reanimated';

const MealsNavigator =createStackNavigator ({
    Categories: CategoriesScreen,
  
    Meals: CategoryMealsScreen,
  

}); 

export default  createAppContainer( MealsNavigator); 
