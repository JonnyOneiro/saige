import { combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import listReducer from './list_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    list: listReducer
});

export default rootReducer;