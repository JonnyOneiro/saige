import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import listReducer from './list_reducer';
import categoryReducer from './category_list_reducer';
import conditionsReducer from './conditions_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    list: listReducer,
    category: categoryReducer,
    conditions: conditionsReducer
});

export default rootReducer;