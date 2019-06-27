
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
 class AllPostPage extends Component {
  /*constructor(props) {
    super(props);

    
  }*/

  componentDidMount()
  {
    const urlParams = new URLSearchParams(this.props.location.search)
    const key = urlParams.get('page')
    page=typeof(key) !=='undefined'?key!= null? key:1:1;   
 
      this.props.dispatch(postActions.getSize());  

      this.props.dispatch(postActions.getAll(page-1,10));

      
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleDeletePost(id)
  {

    return(e)=> this.props.dispatch(postActions.deleteSingle(id));

  }
  handlePaginationPost(page)
  {
      console.log('velicina page trenutna je:'+page)
    return(e)=>this.props.dispatch(postActions.getAll(page-1,10));
  }
  renderPagination()
  {
    const{size}=this.props.postReducer;
    console.log('kk velicina'+((size/10)+1));
    const pagination = [];
    for (var i=1; i < size/10+1; i++) {
        let x="/allposts?page="+i;
        pagination.push( <li className="page-item"> <NavLink className="page-link" onClick={this.handlePaginationPost(i)}>{i}</NavLink> </li>);
    }
    return pagination;

  }


  render() {
    const{user}=this.props;
    console.log('propsstanje');
    console.log(this.props);
    const {postReducer}=this.props;
    
    console.log(postReducer);
    //initSample();

    
    return (
      <div className="PostPage container">
          <h1>{user.name}</h1>
      
                    
   {/*     {postReducer.loaded &&              
                    <ul className="PostCards" style={{ listStyleType: 'none'}}>
                        {postReducer.post.map((post, index) =>
                            <li key={post.idpost}>
                                <div>
                                    {post.content}
                                    {
                                     postReducer.deleteError ? <span className="text-danger"> - ERROR: {postReducer.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeletePost(post.idpost)}>Delete</a></span>
                                    }
                                </div>
                            </li>
                        )}
                                  </ul>} */}

                   


                    <div className="card-box">
                                    <div className="row">
                                    <div className="col-md-10">
                                    <h4 className="m-t-0 header-title"><b>All Posts</b></h4>
                                    <p className="text-muted font-14 m-b-20">
                                        Your awesome text goes here.
                                    </p>
                                    </div>
                                    <div className="col-md-2">
                                    {postReducer.deleting && <p style={{float:"right"}}>deleting...</p>}
                                    {postReducer.loading &&       
                                    <div class="sk-circle" style={{margin:"0px auto"}}>
                                        <div class="sk-circle1 sk-child"></div>
                                        <div class="sk-circle2 sk-child"></div>
                                        <div class="sk-circle3 sk-child"></div>
                                        <div class="sk-circle4 sk-child"></div>
                                        <div class="sk-circle5 sk-child"></div>
                                        <div class="sk-circle6 sk-child"></div>
                                        <div class="sk-circle7 sk-child"></div>
                                        <div class="sk-circle8 sk-child"></div>
                                        <div class="sk-circle9 sk-child"></div>
                                        <div class="sk-circle10 sk-child"></div>
                                        <div class="sk-circle11 sk-child"></div>
                                        <div class="sk-circle12 sk-child"></div>
                                    </div>}
                              
                                    </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover m-0 table-actions-bar">

                                            <thead>
                                            <tr>
                                                <th>
                                                  { /* <div className="btn-group dropdown">
                                                        <button type="button" className="btn btn-secondary btn-xs dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false"><i className="caret"></i></button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Dropdown link</a>
                                                            <a className="dropdown-item" href="#">Dropdown link</a>
                                                        </div>
                                    </div>*/}
                                                </th>
                                                <th>Title</th>
                                                <th></th>
                                                <th>Type</th>
                                                <th>ID</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                     {postReducer.loaded &&
                                            <tbody>
                                           
                                      
                                   {postReducer.post.map((post,index) =>
                                            <tr>
                                                <td>
                                                    <img src={require(`../components/images/LLI_Logo.png`)} alt="contact-img" title="contact-img" className="rounded-circle thumb-sm"/>
                                                </td>

                                                <td>
                                                    <h5 className="m-b-0 m-t-0 font-600">{post.title}</h5>
                                                    <p className="m-b-0"><small>{post.content.substr(0,20)+"..."}</small></p>
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-map-marker text-primary"></i> 
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-clock text-success"></i> post
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-currency-usd text-warning"></i> {post.idpost}
                                                </td>

                                                <td>
                                                    <a href="#" class="table-action-btn"><i className="mdi mdi-pencil"></i></a>
                                                    
                                                    <button type="button" onClick={this.handleDeletePost(post.idpost)} className="btn btn-danger waves-effect w-md waves-light">Delete</button>
                                                    <Link className="btn btn-inverse waves-effect w-md waves-light" to={`/post/${post.idpost}`}>Edit</Link>
                                                   
                                                </td>
                                            </tr>)
}
                                            </tbody>
}
                                        </table>
                                    </div>

                                    <ul className="pagination">
                                                        <li className="page-item">
                                                            <a className="page-link" href="#" aria-label="Previous">
                                                                <span aria-hidden="true">«</span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                        </li>

                                                       
                                                          {postReducer.paginationbar && this.renderPagination()}
                                                
                                                
                                                        {/*<li className="page-item"><a className="page-link" href="#">1</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">4</a></li>
<li className="page-item"><a className="page-link" href="#">5</a></li>*/}
                                                     

                                                        <li className="page-item">
                                                            <a className="page-link" href="#" aria-label="Next">
                                                                <span aria-hidden="true">»</span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </li>
                                      </ul>
                                </div>



       
      </div>
    );
  }
}

function mapStateToProps(state)
{
    const {postReducer ,auth} = state;
    const {user}=auth;
    const {loggedIn}=auth;
    return{
        postReducer,user,loggedIn
    };
}

const connectAllPosts = connect(mapStateToProps)(AllPostPage);
export {connectAllPosts as AllPostPage};