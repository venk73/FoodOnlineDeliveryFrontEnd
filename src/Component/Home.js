import React from 'react'
import {Link} from "react-router-dom";
export default class Home extends React.Component{
    constructor() {
        super();
    
        this.state = {
          userInfo: {
            username: '',
            password: ''
          }
        };

    }
    handleSubmit=(e)=> {
        console.log(this.state.userInfo);
        console.log('Yepee! form submitted');
        e.preventDefault();
      }

handleInput=(event, inputPropName)=>{
    const newState = Object.assign({}, this.state);
    newState.userInfo[inputPropName] = event.target.value;
    this.setState(newState);
   
}
render(){
    return(
      <div class="container">
         <img src="foodservingani.gif"  alt="food" width="1000" height="755"></img>
         </div>
        /* <div class="container ">
           
            <form onSubmit={this.handleSubmit} class="float-right shadow p-4 my-5 bg-muted border" > 
            <div class="form-group">
                <label htmlfor="username"><b>UserName:</b></label>
                <input type="email" id="email" class="form-control" value={this.state.username}  placeholder="enter email id"  onChange={event => this.handleInput(event, 'username')} required ></input><br/>
               </div>
               <div class="form-group">
                <label htmlfor="password"><b>Password:</b></label>
                <input type="password" id="password" class="form-control" value={this.state.password} pattern={"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{8,16}$"} placeholder="enter valid password"  onChange={event => this.handleInput(event, 'password')}  required></input><br/>
                </div>
                {/* { this.displayValidationErrors('password') } */
       
                /* <button class="btn btn-success ">Login </button>
                <Link  class="btn btn-info" role="button"  to="/Register">signup</Link>
                </form> */
               
            
              
          


        /* </div> */


    );
}
}