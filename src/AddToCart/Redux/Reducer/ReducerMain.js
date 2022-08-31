import {combineReducers} from 'redux' 
import {ProductReducer, SelectedProductReducer} from "./ProductReducer";


const rootReducer = combineReducers({

    products : ProductReducer,
    item : SelectedProductReducer,

})


export default rootReducer;