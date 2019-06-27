import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {loggedIn: false};

export function auth(state=initialState, action)
{
    switch(action.type)
    {
        case userConstants.LOGIN_REQUEST :
        return{
            loggingIn:true,
            user: action.user
        };
        case userConstants.LOGIN_SUCCESS:
            return {
              loggedIn: true,
              user: action.user,
             
            };
        case userConstants.LOGIN_FAILURE:
          return {
            logginfail: true
           
          };
          case userConstants.USERS_LOGOUT_REQUEST :
            return{
                loggingOut:true
            };
            case userConstants.USERS_LOGOUT_SUCCESS :
              return{
                loggedIn: false
              };
     default:
      return state
    }

};
