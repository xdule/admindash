import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import { userService } from '../_services';

//import logo from './logo.svg';
//import './menu.scss';
{/*
const Navbar = () => {
    return(
    <div>



           
            <NavLink to="/about">About</NavLink>



            <div className="topbar">

  
    <div className="topbar-left">
        <NavLink className="tito" activeStyle={{ color: 'red',backgroundColor:'green' }} to="/">
       
       </NavLink>
    </div>

    <nav className="navbar-custom">

        <ul className="list-inline float-right mb-0">
            
    <li className="list-inline-item dropdown notification-list">
        <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button"
           aria-haspopup="false" aria-expanded="false">
            <i className="dripicons-bell noti-icon"></i>
            <span className="badge badge-pink noti-icon-badge">4</span>
        </a>

      
        <div className="dropdown-menu dropdown-menu-right profile-dropdown" aria-labelledby="Preview" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(69px, 72px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}> 
            <div className="dropdown-item noti-title">
                <h5><span className="badge badge-danger float-right">5</span>Notification</h5>
            </div>

           
            <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-success"><i className="icon-bubble"></i></div>
                <p className="notify-details">Robert S. Taylor commented on Admin<small className="text-muted">1 min ago</small></p>
            </a>

           
            <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-info"><i className="icon-user"></i></div>
                <p className="notify-details">New user registered.<small className="text-muted">1 min ago</small></p>
            </a>

       
            <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-danger"><i className="icon-like"></i></div>
                <p className="notify-details">Carlos Crouch liked <b>Admin</b><small className="text-muted">1 min ago</small></p>
            </a>

         
            <a href="javascript:void(0);" className="dropdown-item notify-item notify-all">
                View All
            </a>

        </div>
    </li>
           

            <li className="list-inline-item dropdown notification-list">
                <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button"
                   aria-haspopup="false" aria-expanded="false">
                    <img src="~/Content/assets/images/favicon.ico" alt="user" className="rounded-circle"/>
                </a>
                <div className="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview">
                  
                    <div className="dropdown-item noti-title">
                        <h5 className="text-overflow"><small>Welcome ! </small> </h5>
                    </div>

             
    <NavLink to="/" className="dropdown-item notify-item">
        <i className="mdi mdi-account-circle"></i> <span>Home</span>
        </NavLink>

        <NavLink to="/allposts" className="dropdown-item notify-item">
        <i className="mdi mdi-account-circle"></i> <span>AllPosts</span>
        </NavLink>

    <NavLink to="/about" className="dropdown-item notify-item">
      
        <i className="mdi mdi-settings"></i> <span>About</span>
    </NavLink>
               
    <NavLink to="/login" className="dropdown-item notify-item">
        <i className="mdi mdi-account-circle"></i> <span>login</span>
    </NavLink>

  
    <a  className="dropdown-item notify-item">
        <i className="mdi mdi-lock-open"></i> <span>Lock Screen</span>
    </a>

                  
                    <a onClick={userService.logout} className="dropdown-item notify-item">
                        <i className="mdi mdi-power"></i> <span>Logout</span>
                    </a>

                </div>
            </li>

        </ul>
        
    <ul className="list-inline menu-left mb-0">
        <li className="float-left">
            <button className="button-menu-mobile open-left waves-light waves-effect">
                <i className="dripicons-menu"></i>
            </button>
        </li>

    </ul>
        
    </nav>

</div>

   


//side menu 



<div className="left side-menu">
    <div class="slimscroll-menu" id="remove-scroll">

        
        <div id="sidebar-menu">
           
            <ul className="metismenu" id="side-menu">
                <li className="menu-title">Navigation</li>
                <li>
                <NavLink to="/" exact className="dropdown-item notify-item"><span> Home </span></NavLink>
                </li>
                
                <li>
                <NavLink to="/allposts" className="dropdown-item notify-item"><span> All Post Page </span></NavLink>
                </li>

                <li>
                <NavLink to="/allposts" className="dropdown-item notify-item"><span> Create New Post </span></NavLink>
                </li>

    {            <li>
                    <a href=""><i className="fi-paper"></i> <span> Edit Post Section </span></a>
                </li>
                
                <li>
                    <a href="" aria-expanded="false"><i className="fi-paper"></i> <span>Edit Posts </span> <span className="menu-arrow"></span></a>
                    <ul className="nav-second-level collapse" aria-expanded="false">
                        <li><a href="">Create Post</a></li>
                        <li>
                            <a href="">Edit Post Section</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href=""><i className="fi-layers"></i> <span>Edit Sections</span> </a>
                </li>
                        <li>
                    <a href="todo.html"><i className="fi-square-plus"></i> <span> Add Marketing Items </span></a>
                </li>
                <li>
                    <a href="todo.html"><i class="fi-square-minus"></i> <span> Remove Banner </span></a>
                </li>
                <li>
                    <a href="todo.html"><i class="fi-clock"></i> <span> Announcements </span></a>
                </li>
                <li>
                    <a href="todo.html"><i class="fi-mail"></i> <span> Manage Email Formats </span></a>
                </li>
                <li>
                    <a href="todo.html"><i class="fi-layers"></i> <span> Reports </span></a>
                </li>
                <li>
                    <a href="todo.html"><i class="fi-layers"></i> <span> Manage Master Affiliates </span></a>
    </li>}
                    </ul>
</div>
     
        <div className="clearfix"></div>

    </div>
   

</div>
</div>
)
};

export default Navbar;
*/}


import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import { userService } from '../_services';



import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import {postActions} from '../_actions'
import About from "../components/about";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import "./Login.css";
let page=1;
//let size=0;
 class Navbar extends Component {
  /*constructor(props) {
    super(props);

    
  }*/

  componentDidMount()
  {
    const urlParams = new URLSearchParams(this.props.location.search)
    const key = urlParams.get('page')
    page=typeof(key) !=='undefined'?key!= null? key:1:1;
    console.log('najvelicina je  :'+postActions.getSize());
    
      //size=postActions.getSize();
      this.props.dispatch(postActions.getSize());
      console.log('siz eje :'+this.props.size);
     // this.props.dispatch(postActions.getSize());
      this.props.dispatch(postActions.getAll(page-1,10));
      console.log("ispod je trenutno stanje");
      console.log(this.props);
      
  }



  render() {
    const{user}=this.props;
    
    return (
      
       


          <div>



           
          <NavLink to="/about">About</NavLink>



          <div className="topbar">


  <div className="topbar-left">
      <NavLink className="tito" activeStyle={{ color: 'red',backgroundColor:'green' }} to="/">
     
     </NavLink>
  </div>

  <nav className="navbar-custom">

      <ul className="list-inline float-right mb-0">
          
  <li className="list-inline-item dropdown notification-list">
      <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button"
         aria-haspopup="false" aria-expanded="false">
          <i className="dripicons-bell noti-icon"></i>
          <span className="badge badge-pink noti-icon-badge">4</span>
      </a>

    
      <div className="dropdown-menu dropdown-menu-right profile-dropdown" aria-labelledby="Preview" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(69px, 72px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}> 
          <div className="dropdown-item noti-title">
              <h5><span className="badge badge-danger float-right">5</span>Notification</h5>
          </div>

         
          <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="notify-icon bg-success"><i className="icon-bubble"></i></div>
              <p className="notify-details">Robert S. Taylor commented on Admin<small className="text-muted">1 min ago</small></p>
          </a>

         
          <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="notify-icon bg-info"><i className="icon-user"></i></div>
              <p className="notify-details">New user registered.<small className="text-muted">1 min ago</small></p>
          </a>

     
          <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="notify-icon bg-danger"><i className="icon-like"></i></div>
              <p className="notify-details">Carlos Crouch liked <b>  {user.name}</b><small className="text-muted">1 min ago</small></p>
          </a>

       
          <a href="javascript:void(0);" className="dropdown-item notify-item notify-all">
              View All
          </a>

      </div>
  </li>
         

          <li className="list-inline-item dropdown notification-list">
              <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="false" aria-expanded="false">
                  <img src="~/Content/assets/images/favicon.ico" alt="user" className="rounded-circle"/>
              </a>
              <div className="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview">
                
                  <div className="dropdown-item noti-title">
                      <h5 className="text-overflow"><small>Welcome ! </small> </h5>
                  </div>

           
  <NavLink to="/" className="dropdown-item notify-item">
      <i className="mdi mdi-account-circle"></i> <span>Home</span>
      </NavLink>

      <NavLink to="/allposts" className="dropdown-item notify-item">
      <i className="mdi mdi-account-circle"></i> <span>AllPosts</span>
      </NavLink>

  <NavLink to="/about" className="dropdown-item notify-item">
    
      <i className="mdi mdi-settings"></i> <span>About</span>
  </NavLink>
             
  <NavLink to="/login" className="dropdown-item notify-item">
      <i className="mdi mdi-account-circle"></i> <span>login</span>
  </NavLink>


  <a  className="dropdown-item notify-item">
      <i className="mdi mdi-lock-open"></i> <span>Lock Screen</span>
  </a>

                
                  <a onClick={userService.logout} className="dropdown-item notify-item">
                      <i className="mdi mdi-power"></i> <span>Logout</span>
                  </a>

              </div>
          </li>

      </ul>
      
  <ul className="list-inline menu-left mb-0">
      <li className="float-left">
          <button className="button-menu-mobile open-left waves-light waves-effect">
              <i className="dripicons-menu"></i>
          </button>
      </li>

  </ul>
      
  </nav>

</div>

 


//side menu 



<div className="left side-menu">
  <div class="slimscroll-menu" id="remove-scroll">

      
      <div id="sidebar-menu">
         
          <ul className="metismenu" id="side-menu">
              <li className="menu-title">Navigation</li>
              <li>
              <NavLink to="/" exact className="dropdown-item notify-item"><span> Home </span></NavLink>
              </li>
              
              <li>
              <NavLink to="/allposts" className="dropdown-item notify-item"><span> All Post Page </span></NavLink>
              </li>

              <li>
              <NavLink to="/allposts" className="dropdown-item notify-item"><span> Create New Post </span></NavLink>
              </li>

  
                  </ul>
</div>
   
      <div className="clearfix"></div>

  </div>
 

</div>
</div>
      
     
    );
  }
}

function mapStateToProps(state)
{
    const {postReducer ,auth} = state;
    const {user}=auth;
    return{
       user
    };
}

const connectAllPosts = connect(mapStateToProps)(Navbar);
export {connectAllPosts as Navbar};