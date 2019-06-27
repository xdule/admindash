import { userConstants } from '../_constants';
import { postService } from '../_services';
import { history } from '../_helpers';

export const postActions = {
   getAll,
   getSingle,
   deleteSingle,
   getSize,
   UpdatePost,
   CreatePost

};

function getAll(page,size)
{
   return dispatch=>{

      dispatch(requestpost());

      postService.getAll(page,size).then(post=>{ 
       //  console.log(post);
          dispatch(successpost(post));    
         
         
         },error=>{dispatch(errorpost(error))}
         
         )



   }
   function successpost(post){return {type:userConstants.POST_SUCCESS, post}}
   function errorpost(error){return {type:userConstants.POST_FAILURE,error}}
   function requestpost(){return {type:userConstants.POST_REQUEST}}



}
function getSize()
{

  return dispatch=>{ postService.getSize().then(post=>{ 
      //  console.log(post);
        dispatch(successpost(post));    
        //console.log('velicina je'+ post);
       // return post;
        },error=>{dispatch(errorgetall(error))}

        );}

        function successpost(size){return {type:userConstants.GET_SIZE, size}}
        function errorgetall(){return {type:userConstants.GET_SIZE_FAILURE}}

}

function getSingle(id)
{
   return dispatch=>{

      dispatch(requestpost(id));

      postService.getSingle(id).then(post=>{ 
       //  console.log(post);
          dispatch(successpost(post));    
         
         
         },error=>{dispatch(errorpost(error))}
         
         )



   }
   function successpost(post){return {type:userConstants.GET_SINGLE_SUCCESS, post}}
   function errorpost(error){return {type:userConstants.POST_DELETE_FAILURE,error}}
   function requestpost(id){return {type:userConstants.GET_SINGLE_REQUEST,id}}


}

function deleteSingle(id)
{
   return dispatch=>{

      dispatch(requestpost(id));

      postService.deleteSingle(id).then(post=>{ 
       //  console.log(post);
          dispatch(successpost(id));    
         
         
         },error=>{dispatch(errorpost(error))}
         
         )



   }
   function successpost(post){return {type:userConstants.POST_DELETE_SUCCESS, post}}
   function errorpost(error){return {type:userConstants.POST_DELETE_FAILURE,error}}
   function requestpost(id){return {type:userConstants.POST_DELETE_REQUEST,id}}



}

function UpdatePost(id,title,content)
{
   console.log('bejagi');
   console.log(id+content);
   return dispatch=>{

      dispatch(requestpost(id));

      postService.UpdatePost(id,title,content).then(post=>{ 
       //  console.log(post);
          dispatch(successpost(post));    
         
         
         },error=>{dispatch(errorpost(error))}
         
         )



   }
   function successpost(post){return {type:userConstants.UPDATE_SUCCESS, post}}
   function errorpost(error){return {type:userConstants.UPDATE_ERROR,error}}
   function requestpost(id){return {type:userConstants.UPDATE_REQUEST,id}}



}



function CreatePost(title,content)
{

   return dispatch=>{

      dispatch(requestpost());

      postService.CreatePost(title,content).then(post=>{ 
       //  console.log(post);
          dispatch(successpost(post));    
          history.push('/allposts');
         
         
         },error=>{dispatch(errorpost(error))}
         
         )



   }
   function successpost(post){return {type:userConstants.SAVE_SINGLE_SUCCESS, post}}
   function errorpost(error){return {type:userConstants.SAVE_SINGLE_ERROR,error}}
   function requestpost(){return {type:userConstants.SAVE_SINGLE_REQUEST}}



}