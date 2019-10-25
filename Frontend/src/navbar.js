import React, {Component} from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import myAccount from './account';
import Products from './cardhome';
import ProdDisp from './ProdDisp';

class NavBar extends Component {


	render() {
		return (
			<Router>
				<nav className="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>                        
				      </button>
				      <Link className="navbar-brand" to={"#"}>AKS Cart</Link>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
				        <li className="active"><Link to={"/"}>Home</Link></li>
				        <li><Link to={"/"}>Products</Link></li>
				        <li><Link to={"#"}>Deals</Link></li>
				      </ul>
				      <ul className="nav navbar-nav navbar-right">
				        <li><Link to={"/account"}><span className="glyphicon glyphicon-user nav-link"></span> Your Account</Link></li>
				        <li><Link to={"#"}><span className="glyphicon glyphicon-shopping-cart nav-link"></span> Cart</Link></li>
				      </ul>
				    </div>
				  </div>
				</nav>
			<Switch>
				<Route exact path='/' component={Products} />
	            <Route path='/account' component={myAccount} />
	            <Route path='/details/:id' component={ProdDisp} />
			</Switch>
			</Router>
			
			);
	}

}

export default NavBar;