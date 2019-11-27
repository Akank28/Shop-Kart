import React, { Component } from "react";

import Footer from './footer';
import NavBar from './navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
// To be removed
import ProdUp from './productUpload';
// To be removed

// import DetailsProd from "./components/create-todos.component";
import PrivateRoute from "./Login/private-route/PrivateRoute";
import Dashboard from "./Login/dashboard/Dashboard";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class Home extends Component
{
	render(){
		return (
			
			
			
			<Provider store={store}>
			<div>
          
      		
			<NavBar />
			
			
			
			<Footer />

			</div>
			</Provider>
			
		);
	}
}

export default Home;