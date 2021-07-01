import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import icon from '../../Images/icon.jpg';
import { withRouter } from "react-router";
import {useLocation} from 'react-router-dom'
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
        <header>
          <Navbar className="menu md-2" collapseOnSelect expand="lg md-2" variant="dark">
          <Navbar.Brand ><h1 ><div className="titleofapp"><img src={icon} width="60" height="60" border-radius="50%"></img>&nbsp;&nbsp;HungerNot</div></h1></Navbar.Brand>
          <Nav>
            <Nav.Link href="/"><h4 style={{color:"darkcyan"}}>Home</h4></Nav.Link>
            
          </Nav>

              <Navbar.Collapse id="responsive-navbar-nav" style={{marginLeft:"1400px",position:"absolute",color:"white"}}>
              { (location.pathname==='/Customer' ||  location.pathname==='/Restaurant')&&  <Nav >
               <h4 > <NavDropdown title="Account" id="collasible-nav-dropdown" style={{color:"tomato"}}>
                  <NavDropdown.Item href="/RestaurantEditProfile" >EditProfile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Orders" >Orders</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Terms" >Terms And Conditions</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Help" >Help</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/MyProfile" >Logout</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown></h4>
                </Nav>
                }
              <Nav className="mr-auto">
               <h4 > <NavDropdown title="Sign Up/Sign In" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/Customer" >Customer</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Restaurant" >Restaurant</NavDropdown.Item>
                  
                </NavDropdown></h4>
                </Nav>


              {/* <Nav>
                <Sidebar href="/Sidebar"><h4 style={{color:"darkcyan"}}>Account</h4></Sidebar>
              </Nav> */}
          </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    )
  }
}

export default withRouter(HeaderComponent);