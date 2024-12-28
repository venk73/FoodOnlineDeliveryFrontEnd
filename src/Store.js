
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./Reducers/productReducers";
import { cartReducer } from "./Reducers/cartReducers";
import { orderReducer } from "./Reducers/orderReducers";
import {ItemsReducers} from "./Reducers/ItemsReducers";
import { ChangeCustomerLoginStatus } from "./Reducers/ChangeCustomerLoginStatus";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const Store = createStore(


  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    items: ItemsReducers,
    clogin: ChangeCustomerLoginStatus,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default Store;