import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout

};

function login(user,pass)
{
    return dispatch =>{
        dispatch(request({user}));
        userService.logout();
        userService.login(user,pass)
        .then(user=>{
           
            dispatch(success(user)); 
            history.push('/');
            
            },
            error=>{
                console.log(error);
                dispatch(Belaj(user));
            }


            )};
    function request(user){return {type:userConstants.LOGIN_REQUEST,user}};
    function success(user){return {type:userConstants.LOGIN_SUCCESS,user}};
    function Belaj(user){return {type:userConstants.LOGIN_FAILURE,user}};
}

function logout()
{
    userService.logout();
    return{type:userConstants.USERS_LOGOUT_SUCCESS};
}