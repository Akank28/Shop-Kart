import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from './footer';
import NavBar from './navbar';
import CardHome from './cardhome';
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";

// To be removed
import ProdUp from './productUpload';
// To be removed

// import DetailsProd from "./components/create-todos.component";


class Home extends Component
{
	render(){
		return (
			
			<div>
			<NavBar />
			
			
			
			<Footer />

			</div>
			
			
		);
	}
}

export default Home;