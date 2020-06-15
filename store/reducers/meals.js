
import {MEALS} from '../../data/dummy-data'; 
import { toggleFavorite, TOGGLE_FAVORITE } from '../actions/meals';

const initialState  ={
    meals:MEALS, 
    filteredMeals: MEALS,
    favouriteMeals: [] 

}; 

const mealsReducer = (state=initialState, action ) =>{

    switch(action.type) {
        case TOGGLE_FAVORITE :
            default: 
            return state;
    }
    
}; 

export default mealsReducer; 