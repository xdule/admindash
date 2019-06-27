
import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import {postActions} from '../_actions';
import ReactHtmlParser from 'react-html-parser'; 
import ReduxToastr from 'react-redux-toastr'
import {toastr} from 'react-redux-toastr'

//import "./Login.css";
let page=1;
//let size=0;
 class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  
    this.handleChange= this.handleChange.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.saveContent=this.saveContent.bind(this);
    
  }

  componentDidMount()
  {
  
     setTimeout(function(){ window.initSample(); }, 50);
   // Promise(window.initSample());
  // await( window.initSample());
    
  }



  handleLoad() {
    window.checkCookie();
   }

  validateForm() {
    return this.state.title.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

 

  saveContent(e)
  {
   // e.preventDefault();


    const {postReducer}=this.props;
 //   console.log(postReducer.post[0].idpost);
    this.props.dispatch(postActions.CreatePost(this.state.title, window.CKEDITOR.instances.editor.getData()));
    //return(e)=>this.props.dispatch(postActions.UpdatePost(postReducer.post[0].idpost, window.CKEDITOR.instances.editor.getData()));
  }


  render() {
    const{user}=this.props;
  //  console.log(this.props);
    const {postReducer}=this.props;
  //  console.log('tito');
    console.log([postReducer]);

    const toastrMessageOptions = {
      timeOut: 3000, // Default value is 0 timeOut={4000}
      newestOnTop:false,
     
      position:"top-right",
      transitionIn:"fadeIn",
      transitionOut:"fadeOut",
      onShowComplete: () => console.log('SHOW: animation is done'),
      onHideComplete: () => console.log('HIDE: animation is done'),
      removeOnHover: false, // Default value is false
      removeOnHoverTimeOut: 1000
    };
   
    const toastrType = 'warning';
const toastrOptions = {
  icon: toastrType,
  status: toastrType
};



   // handleLoad();
    return (
      <div className="PostPage container">
          <h1>{user.name}</h1>

        <div>
        <FormGroup controlId="title" bsSize="large">
            <FormLabel>Title</FormLabel>
            <FormControl
              autoFocus
              type="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>
     

            <div id="editor" >
            
            </div>
                 
         
                 
        </div>
        
        <button onClick={this.saveContent}>Save</button>
        {postReducer.saving && <p>Saving...</p>}
        {postReducer.saved && 
        
      
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

const connectAllPosts = connect(mapStateToProps)(CreatePage);
export {connectAllPosts as CreatePage};