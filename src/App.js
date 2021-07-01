
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
import RemoveItem from './Component/Restaurant/RemoveItem'
import MyProfile from './MyProfile'
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

        {/* Restaurant Router */}
        <Route  exact path="/Restaurant" >
         <Restaurant/>
         
        </Route>

        {/* Customer Router */}
        <Route exact path="/Customer" >
         <Customer/>
      
        </Route>
      </Switch>
      <Route exact path="/RestaurantDashboard">
        <RestaurantDashboard/>
        
        </Route>
      
        <Route exact path="/RestaurantEditProfile">
          <RestaurantEditProfile/>
        </Route>
        <Switch>
          <Route path="/Add" component={AddItems}/>
          <Route path="/Edit/:id" component={UpdateItems}/>
          <Route path="/delete/:id" component={RemoveItem}/>
        </Switch>
        <Switch>
        <Route exact path="/CustomerDashboard">
        <CustomerDashboard/>
      </Route>
      <Route exact path="/EditProfile">
          <EditProfile/>
         
        </Route>
        <Route exact path="/Category">
            <Category/>
          </Route>
          <Route exact path="/CartDashboard">
            <CartDashboard/>
          </Route>
          <Route exact path="/MyProfile">
            <MyProfile/>
            </Route>
          </Switch>
      <FooterComponent />
    </Router>
    </div>
   
      </Provider>


  );
}

export default App;
