import React, {Component} from 'react';

class footer extends Component {

	render() {
		return (

				<footer className="container-fluid text-center text-white bg-dark">
				  <p>Online Store Copyright</p>  
				  <form className="form-inline justify-content-center"> Get deals: 
				    <input type="email" className="form-control" size="50" placeholder="Email Address" style={{'margin':'5px'}}/>
				    <button type="button" className="btn btn-danger">Sign Up</button>
				  </form>
				</footer>

			);
	}


}

export default footer;