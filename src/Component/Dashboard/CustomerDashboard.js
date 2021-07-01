import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
class CustomerDashboard extends React.Component{

    
    render(){
        return(
           <div>
              
                <header>
              <Navbar style={{marginLeft:"1400px",position:"absolute",color:"white"}} >
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav >
               <h4> <NavDropdown title="Account" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/EditProfile" >EditProfile</NavDropdown.Item>
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
         
           <div className="adservices" >
           <div className="container"  style={{textAlign:"left"}}>
               <br/>
               <br/>
                   <div> <h1 style={{color:"white",textAlign:"center"}}>Customer Services</h1></div><hr/>
                    
                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4 style={{textAlign:"center"}}>Use this service to check all the category</h4></p>
                    </div>
                    <div className="col-md-4">
                   
                    <Link to="/Category" className="btn btn-lg btn-info">category </Link>
                    <hr/>
                    </div>
                    
                    </div>

                   
                    </div>
               
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
              
            </div>
            </div>
        )
    }
}
export default CustomerDashboard;


