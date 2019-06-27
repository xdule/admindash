

import ReactDOM from 'react-dom';
import {  Redirect } from 'react-router-dom';
import { userService } from '../_services';



import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import {postActions} from '../_actions'
import About from "../components/about";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {userActions} from '../_actions'
import ReduxToastr from 'react-redux-toastr';


 class Navbar extends Component {
  /*constructor(props) {
    super(props);

    
  }*/

  componentDidMount()
  {

      console.log(this.props);
      const{user}=this.props;
    
      console.log('navbar user je : ');
      console.log(this.props);
      
      
  }

  handleLogout = event =>
  {
    //event.preventDefault();
    const{dispatch} =this.props;
    dispatch(userActions.logout()); 
    this.props.history.push("/login")
  // return <Redirect to={'/login'}/>
  console.log(this.state);
return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }}/>
  }





  render() {
    const{user,loggedIn}=this.props;
   // const loggedin=typeof user === undefined?true:false;

    return (
      
       


          <div>

<ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>



           
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
              <p className="notify-details">Carlos Crouch liked <b> {loggedIn && user.name} </b><small className="text-muted">1 min ago</small></p>
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

           
  <NavLink exact to="/" className="dropdown-item notify-item">
      <i className="mdi mdi-account-circle"></i> <span>Home</span>
      </NavLink>

      <NavLink to="/allposts" className="dropdown-item notify-item">
      <i className="mdi mdi-account-circle"></i> <span>AllPosts</span>
      </NavLink>

  <NavLink to="/about" className="dropdown-item notify-item">
    
      <i className="mdi mdi-settings"></i> <span>About</span>
  </NavLink>
             
  <NavLink to="/login" className="dropdown-item notify-item">
      <i className="mdi mdi-account-circle"></i> <span>Logout</span>
  </NavLink>




                
              

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


{loggedIn &&
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
              <NavLink to="/createpost" className="dropdown-item notify-item"><span> Create New Post </span></NavLink>
              </li>

  
                  </ul>
</div>
   
      <div className="clearfix"></div>

  </div>
 

</div>
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
       user,loggedIn
    };
}

const connectAllPosts = connect(mapStateToProps)(Navbar);
export {connectAllPosts as Navbar};