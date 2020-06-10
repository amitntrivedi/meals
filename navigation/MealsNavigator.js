import { createStackNavigator   } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'; 
import CategoryMealsScreen from '../screens/CategoryMealsScreen'; 
import MealDetailScreen from '../screens/MealDetailScreen';
import { exp } from 'react-native-reanimated';

const MealsNavigator =createStackNavigator ({
    Categories: CategoriesScreen,
  
    Meals: CategoryMealsScreen,
    Detail: MealDetailScreen,
  

}); 

export default  createAppContainer( MealsNavigator); 
