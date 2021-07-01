import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
class RestaurantDashboard extends React.Component{
    render(){
        return(
            <div className="project">
                   <header>
              <Navbar  style={{marginLeft:"1400px",position:"absolute",color:"white"}}>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav >
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
                </Navbar.Collapse>
                </Navbar>
          </header>
            
            <div >
            <div className="container">
            <br/>
                <br/>
                   <div> <center><h1 style={{color:"white"}}>Restaurant Owner Services</h1></center></div><hr/>
                   <br/>
                   <br/>
            <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to Add items</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/Add" className="btn btn-lg btn-info">Add Item</Link><hr/>
                    </div>
                    <hr/>
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to update items</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/delete" className="btn btn-lg btn-info">update Item</Link><hr/>
                    </div>
                    <hr/>
                    </div>
                 
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/><br/><br/><br/>
            </div>
            </div>
        )
    }
}
export default RestaurantDashboard;
