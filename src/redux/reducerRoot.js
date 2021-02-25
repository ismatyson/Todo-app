import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import { reducer as formReducer } from 'redux-form'

    const rootReducer = combineReducers({

        counter: counterReducer,
        //redux-form
        form: formReducer

    });

export default rootReducer;