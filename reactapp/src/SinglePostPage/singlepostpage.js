
import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import {postActions} from '../_actions';
import {postService} from '../_services';
import ReactHtmlParser from 'react-html-parser'; 
import ReduxToastr from 'react-redux-toastr'
import {toastr} from 'react-redux-toastr'
import { totalmem } from "os";


//import "./Login.css";
let page=1;
//let size=0;
 class SinglePostPage extends Component {
  constructor(props) {
    super(props);

    const { match: { params } } = this.props;

    const urlParams = new URLSearchParams(this.props.location.search)
    const key = urlParams.get('page')
      this.props.dispatch(postActions.getSingle(params.id));
      console.log(this.props);


    this.state = {
          title : ""
    };
  
    this.setState({title:postService.getSingle(params.id).title});
  postService.getSingle(params.id).then(post=>{console.log(post[0].title);   this.setState({title:post[0].title})},error=>{});
  
this.handleChange= this.handleChange.bind(this);
this.handleLoad = this.handleLoad.bind(this);
this.saveContent=this.saveContent.bind(this);
    
  }

  componentDidMount()
  {
   
      console.log("ispod je trenutno stanje");
     
      //window.initSample();
      
    /*  window.addEventListener('load', this.handleLoad);
      setTimeout( () => {window.checkCookie()},1000);*/
      const {postReducer}=this.props;
    //  this.state.title=typeof postReducer.post !== undefined?postReducer.post[0].title:'title' ;
     setTimeout(function(){ window.initSample(); }, 300);
 
   /*  if (postReducer.post !== false) {
      this.setState({
        completeProfile: this.props.mandatory_fields.updateNeeded,
      })*/


    //toster

    
  }



  handleLoad = event =>  {
    console.log('ovdje se hendla');
    console.log(this.props);

   this.setState({ title:this.props.postReducer.title});
   console.log(this.state.title);
   }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {

 
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handlePaginationPost(page)
  {
      console.log('velicina page trenutna je:'+page)
    return(e)=>this.props.dispatch(postActions.getAll(page-1,10));
  }

  saveContent(e)
  {
   // e.preventDefault();


    const {postReducer}=this.props;
    console.log(postReducer.post[0].idpost);
    this.props.dispatch(postActions.UpdatePost(postReducer.post[0].idpost, this.state.title, window.CKEDITOR.instances.editor.getData()));
    //return(e)=>this.props.dispatch(postActions.UpdatePost(postReducer.post[0].idpost, window.CKEDITOR.instances.editor.getData()));
  }


  render() {
    const{user}=this.props;
  //  console.log(this.props);
    const {postReducer}=this.props;
  //  console.log('tito');
    console.log(this.state);


   
    const toastrType = 'warning';
const toastrOptions = {
  icon: toastrType,
  status: toastrType
};



   // handleLoad();
    return (
      <div className="PostPage container">
          <h1>{user.name}</h1>
        {postReducer.loading && <p>loading...</p>}

        <FormGroup controlId="title" bsSize="large">
              <FormLabel>Title</FormLabel>
              <FormControl
                autoFocus
                type="title"
                value={this.state.title}
                initalvalue="ses"
                onChange={this.handleChange}
              />
            </FormGroup>
     
     
    
        {postReducer.loaded  && 
        <div>
       

        {postReducer.post.map((post,index)=>
        <div>
            

                  <div id="editor" >
                    { ReactHtmlParser (post.content) }
                    </div>
                 </div>
            
            )}
              
        </div>


        }
      
        <button onClick={this.saveContent}>Save</button>
        {postReducer.savingsingle && <p>Updating...</p>}
        {postReducer.updated && 
        
      
        toastr.success('Success', 'The post has been updated')
     
        }




     
      
   
   
    
      

       
      </div>
    );
    
  }
}

function mapStateToProps(state)
{
    const {postReducer ,auth} = state;
    const {user,loggedIn}=auth;
    return{
        postReducer,user,loggedIn
    };
}

const connectAllPosts = connect(mapStateToProps)(SinglePostPage);
export {connectAllPosts as SinglePostPage};