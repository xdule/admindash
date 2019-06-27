import {combineReducers} from 'redux';
import {auth} from './auth.reducer';
import {postReducer} from './post.reducer';
import {reducer as toastrReducer} from 'react-redux-toastr'


const rootReducer = combineReducers({ auth, postReducer, toastr: toastrReducer 

});

export default rootReducer;


