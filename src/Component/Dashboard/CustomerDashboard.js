import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import rest1 from '../../Images/Restaurant/rest1.jpg'
import rest2 from '../../Images/Restaurant/rest2.jpg'
import rest3 from '../../Images/Restaurant/rest3.jpg'
class CustomerDashboard extends React.Component{

    
    render(){
        return(
           <div>
              
                <header>
              <Navbar style={{marginLeft:"1400px",position:"absolute",color:"white"}} >
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav >
               <h4> <NavDropdown title="Account" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/editprofile" >EditProfile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/orders" >Orders</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/terms" >Terms And Conditions</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/help" >Help</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/myprofile" >Logout</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown></h4>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
          </header>
         
           <div className="brownback" >
           <div className="container"  style={{textAlign:"left"}}>
               <br/>
               <br/>
                   <div> <h1 style={{color:"white",textAlign:"center"}}>List of Restaurants</h1></div><hr/>
                    <br/>
                    <br/>
                  
                    <div className="col-md-4">
                   
                   
                
                  
                    
                    </div>

                    <div>
                        <ul className="nav justify-content-center"> 
                         <li >
							<span to="Sitara Grand Hotel">
                            <Link to="/category" >
								<img src={rest1} alt="Images" height="300" width="300px" className="mr-2" />
                               
                                <li style={{color:"white"}}>Sitara Grand Hotel</li> </Link>
							</span>
						</li>&nbsp;&nbsp;&nbsp;&nbsp;
						<li >
							<span to="Aha Restaurant" >
                            <Link to="/Category" >
								<img src={rest2} alt="Images" width="300px" height="300" className="mr-2" />
								<li style={{color:"white"}}>Aha Restaurant</li></Link>
							</span>
						</li>&nbsp;&nbsp;&nbsp;&nbsp;
				
				
						<li>
							<span
								to="Paradise Hotel"

							> <Link to="/category" >
								<img src={rest3} alt="Images" width="300px" height="300" className="mr-2" />
								<li style={{color:"white"}}>Paradise Hotel</li></Link>
							</span>
						</li>
                        </ul>
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


