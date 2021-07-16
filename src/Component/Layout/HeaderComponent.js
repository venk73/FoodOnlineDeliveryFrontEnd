import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import icon from '../../Images/icon.jpg';
import { withRouter } from "react-router";

// import {useLocation} from 'react-router-dom'
import PropTypes from "prop-types";
class HeaderComponent extends React.Component {
  constructor(props){
    super(props);
  }
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render() {
    const { match, location, history } = this.props
    return (
      <div >
        <header >
        <nav class="navbar navbar-lightcyan bg-dark">
          <Navbar className="menu md-2" collapseOnSelect expand="lg md-2" variant="dark">
          <Navbar.Brand ><h1  ><div className="titleofapp"><img src={icon} width="60" height="60" border-radius="50%"></img>&nbsp;&nbsp;&nbsp;&nbsp;<b style={{color:"lightcyan"}}>HungerNot</b></div></h1></Navbar.Brand>
          <Nav>&nbsp;&nbsp;
            <Nav.Link href="/"><h2 style={{color:"lightcyan"}}>Home</h2></Nav.Link>
            
          </Nav>

              <Navbar.Collapse id="responsive-navbar-nav" style={{marginLeft:"1400px",position:"absolute",color:"white"}}>
              { (location.pathname==='/customer' ||  location.pathname==='/restaurant')&&  <Nav >
               <h3 > <NavDropdown title="Account" id="collasible-nav-dropdown" style={{color:"tomato"}}>
                  <NavDropdown.Item href="/restauranteditprofile" >EditProfile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/orders" >Orders</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/terms" >Terms And Conditions</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/help" >Help</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/myprofile" >Logout</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown></h3>
                </Nav>
                }  <h3 style={{color:"lightcyan"}}>
              <Nav className="mr-auto" >
              <NavDropdown title="Sign Up/Sign In" id="collasible-nav-dropdown" >
                  <NavDropdown.Item href="/customer" >Customer</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/restaurant" >Restaurant</NavDropdown.Item>
                  
                </NavDropdown>
                </Nav>
                </h3>

              {/* <Nav>
                <Sidebar href="/Sidebar"><h4 style={{color:"darkcyan"}}>Account</h4></Sidebar>
              </Nav> */}
          </Navbar.Collapse>
          </Navbar>
          </nav>
        </header>
      </div>
    )
  }
}

export default withRouter(HeaderComponent);