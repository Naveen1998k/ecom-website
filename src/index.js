import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Shared/Login';
import Signup from './Shared/Signup';
import Home from './Home';
import ResetPassword from './Shared/ResetPassword';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Productdata from './Prdoucts/Search';
import SingleProduct from './Prdoucts/SingleProduct';
import Address from './Address/Address';
import Cart from './Prdoucts/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="login" Component={Login}></Route>
          <Route path='create-account' Component={Signup}></Route>
          <Route path='/' Component={Home}></Route>
          <Route path='/reset-password' Component={ResetPassword}></Route>
          <Route path='/product-search' Component={Productdata}></Route>
          <Route path='/product/:productId' Component={SingleProduct}></Route>
          <Route path='/address' Component={Address}></Route>
          <Route path='/cart' Component={Cart}></Route>

        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
