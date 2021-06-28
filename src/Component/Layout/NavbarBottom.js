import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
class NavbarBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p style={{ paddingBottom: '0px' }}></p>
        <footer style={{ backgroundColor:'black' }} className="footer fixed-bottom">
          <div className="col py-3">
      
          <ul className="navbar-nav mr-auto">
      
      <li class="nav-item">
      <NavLink className="nav-link" exact to="/about">About</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link" exact  to="/contact">Contact</NavLink>
           
      </li>
  
      
    </ul>

              <center>
              <span className="text-light">All Rights Reserved 2021 @Capgemini</span>
              
              </center>
              
    
           
          </div>
        </footer>
      </div>
    );
  }
}
export default NavbarBottom;
