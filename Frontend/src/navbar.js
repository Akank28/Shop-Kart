import React, {Component} from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


import myAccount from './account';
import Products from './cardhome';
import ProdDisp from './ProdDisp';

import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {

	constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

	render() {

		const { navCollapsed } = this.state;

		return (
			<Router>
				<Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Shopping Cart</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Products</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                				</DropdownToggle>
                    			<DropdownMenu right>
			                        <DropdownItem>
			                            <NavLink href="/account">Accounts</NavLink>
			                  		</DropdownItem>
	                                    	
				                    <DropdownItem divider />
				                    <DropdownItem>
				                        <NavLink href="/">Logout</NavLink>
				                  	</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
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