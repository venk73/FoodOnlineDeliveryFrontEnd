
import './App.css';
import React from 'react';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Home from './Component/Home';
import Store from "./Store";
import { Provider } from "react-redux";

import HeaderComponent from './Component/Layout/HeaderComponent';
import CartDashboard from './Component/Dashboard/CartDashboard'
import Restaurant from './Component/RestaurantRegister/Restaurant';
import Customer from './Component/CustomerRegister/Customer';
import RestaurantDashboard from './Component/Dashboard/RestaurantDashboard';
import CustomerDashboard from './Component/Dashboard/CustomerDashboard';
import FooterComponent from './Component/Layout/FooterComponent';
import RestaurantEditProfile from './Component/Restaurant/RestaurantEditProfile';
import EditProfile from './Component/Customer/EditProfile';
import Category from './Component/Customer/Category/Category'
import AddItems from './Component/Restaurant/AddItems';
import UpdateItems from './Component/Restaurant/UpdateItems'
import ViewItem from './Component/Restaurant/ViewItem'
import MyProfile from './MyProfile'
import Checkout from './Component/Customer/OrdersPayment/Checkout'
function App() {
  return (
    <Provider store={Store}>
        
    <div >
     

     <Router>
      <HeaderComponent />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

    
       
      
     
      </Switch>
      <Switch>
      <Route  exact path="/restaurant" >
         <Restaurant/>
         
        </Route>
      <Route exact path="/restaurantdashboard"><RestaurantDashboard/> </Route>
      <Route exact path="/restauranteditprofile"><RestaurantEditProfile/></Route>
        <Route path="/add" component={AddItems}/>
          <Route path="/edit/:itemId" component={UpdateItems}/>
          <Route path="/view" component={ViewItem}/>
        </Switch>
        <Switch>
        <Route exact path="/customer" >
         <Customer/>   </Route>
        <Route exact path="/customerdashboard">
        <CustomerDashboard/>
      </Route>
      <Route exact path="/editprofile">
          <EditProfile/>
         
        </Route>
        <Route exact path="/category">
            <Category/>
          </Route>
          <Route exact path="/cartdashboard">
            <CartDashboard/>
          </Route>
          <Route exact path="/myprofile">
            <MyProfile/>
            </Route>
            <Route exact path="/checkout" component={Checkout}/>
          </Switch>
      <FooterComponent />
    </Router>
    </div>
   
      </Provider>


  );
}

export default App;
