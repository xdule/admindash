import { userConstants } from '../_constants';


export function postReducer(state={}, action)
{
    switch(action.type)
    {
        case userConstants.POST_REQUEST:
        return{
          ...state,
            loading:true
            //post: action.post
        };
        case userConstants.POST_SUCCESS:           
            return {
              ...state,
              loading:false,
            loaded:true,
            post: action.post
             
            };
        case userConstants.POST_FAILURE:
          return {
            loadfail: true
           
          };
        case userConstants.POST_DELETE_REQUEST:
        /*  console.log('this state');
          console.log(state);
          console.log(action);*/
          return {
            ...state,
            id:action.id,
            deleting: true,
           
           
          };
        case userConstants.POST_DELETE_FAILURE:
          return {
            deleteerror: true
           
          };
        case userConstants.POST_DELETE_SUCCESS:
          console.log(state);
          return {
            ...state,
            deleting:false,
            loaded:true,
            post: state.post.filter(post=>post.idpost !== state.id)
           
          };
          case userConstants.GET_SIZE:
            console.log(action);
              return {
                ...state,
                paginationbar:true,
                size:action.size
               
              };
          case userConstants.GET_SIZE_FAILURE:
                return {
                  ...state,
                  getallerror:true
                 
                };
       case userConstants.GET_SINGLE_REQUEST:
                return {
                   loading:true
                 
                };
       case userConstants.GET_SINGLE_SUCCESS:
                    return {
                       post:action.post,
                       loaded:true
                     
                    };
        case userConstants.GET_SINGLE_ERROR:
                        return {
                           singleerror:true
                         
                        };
     case userConstants.SAVE_SINGLE_ERROR:
          return {
            error:true
           
          };
          case userConstants.SAVE_SINGLE_REQUEST:
            return {
              ...state,
               saving:true
             
            };
            case userConstants.SAVE_SINGLE_SUCCESS:
     return {
      ...state,
      saved:true
      
     };
     case userConstants.UPDATE_REQUEST:
      return {
        ...state,
         savingsingle:true,
         updated:false
       
      };
      case userConstants.UPDATE_SUCCESS:
        return {
          ...state,
          updated:true,
          savingsingle:false
         
        };
        case userConstants.UPDATE_ERROR:
          return {
             saveerror:true
           
          };

          
     default:
      return state
    }

};