import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios';

import './cardHome.css';

class CardH extends Component {



	constructor(props) {
		super(props);
		this.state = {product : []};
	}

	componentDidMount() {
        axios.get('http://localhost:4000/shopkart/')
            .then(response => {
                this.setState({ product: response.data });
                console.log(this.state.product);
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {

        const imgStyle = {
            height: 300+'px',
            margin: 'auto',
            display: 'block'
        }

    	const prodList = this.state.product.map( prod => (
    			
                <div className="col-md-4">
	    			<div class="card">
	            		<div class="card-block">
					  		<img className="img-responsive center-block" src={require("./images/"+prod.photo[0])} alt={prod.name+" pic"} style={imgStyle}/>
							<h4 class="card-title">{prod.name}</h4>

							<p class="card-text p-y-1">{prod.description}</p>
							<div className="text-right"> <Link to={"/details/"+prod._id} className="btn btn-primary ">Show Details</Link></div>
						</div>
					</div>
				</div>
    		));

    	return (
            
        		<div className="container body">
        			<div className="row hidden-md-up">
        			{prodList}
        			</div>
        		</div>
            
    		);
    }
}

export default CardH;