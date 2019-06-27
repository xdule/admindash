import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Router,Route,Switch} from 'react-router-dom';
import './components/css/style.css';
import './components/css/bootstrap.min.css';


import Home from "./components/home";

import About from "./components/about";
//import Login from "./components/login";
import {Login} from "./Login";
import { history } from './_helpers';
import {AllPostPage} from "./AllPostPage";
import {SinglePostPage} from "./SinglePostPage";
import {CreatePage} from "./CreatePage";
import {Navbar} from "./navbar";
//import Navbar from "./components/navbar";

import { Provider } from 'react-redux';
import { store } from './_helpers';
import {PrivateRoute} from './_helpers';



class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Router history={history}>
     
    
        
    <Navbar/> 
        <Switch>        
       
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/allposts" component={AllPostPage} />
          <PrivateRoute exact path="/createpost" component={CreatePage} />
          <PrivateRoute path="/post/:id" component={SinglePostPage}/>
          <PrivateRoute path="/about" component={About} />
          <Route path="/login" component={Login} />
          
        </Switch>
       
      </Router>
      </div>
      </Provider>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>    
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        
      </Switch>
    </BrowserRouter>
    </div>
  );
}*/

export default App;
