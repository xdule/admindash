
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


class Home extends Component {
/*state = {
    data: null
  };*/
  constructor(props) {
    super(props);
    this.state = {
        data: []
      };
}

componentDidMount (){
  this.getData();


   
};

getData()
{ var bearer = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE1NTkxNzkwOTV9.ClQCtCCpf4jWCR21rtXTjqssv4SYM52pebjclvzqQUM';
  fetch('/post/post/2',{
  headers: {
      'Authorization': bearer,    
      'Content-Type': 'application/json'
  }}).then(results=>results.json()).then(results => this.setState({data:results})).then(console.log(this.state.data));

};

/*
  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));

      
  

  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/post/post/tito');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body);
    return body;
  };
*/
  render() {console.log(this.state.data);
 
    return (
      
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Welcome to Portal Admin DashBoard</h1>
        </header>
  
  
        
        

      </div>
    );
  }
}

export default Home;
