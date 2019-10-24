import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './cardHome.css';

class CardH extends Component {



	constructor(props) {
		super(props);
		this.state = {product : [{
			id:1002,
			title: 'LG',
			description: 'Very Good'
		},
		{
			id:4005,
			title: 'Samsung',
			description: 'Nice work!'
		},
		{
			id:40033,
			title: 'Samsung',
			description: 'Nice work!'
		}
		]};
	}

	componentDidMount() {
        // axios.get('http://localhost:4000/todos/')
        //     .then(response => {
        //         this.setState({ todos: response.data });
        //     })
        //     .catch(function (error){
        //         console.log(error);
        //     })
    }

    render() {

    	const prodList = this.state.product.map( prod => (
    			<div className="col-md-4">
	    			<div class="card">
	            		<div class="card-block">
					  		<img className="img-responsive center-block" src="https://www.lg.com/ca_en/images/tvs/42cs560/gallery/lg-monitors-cs560-large01.jpg" alt="Card image cap"/>
							<h4 class="card-title">{prod.title}</h4>

							<p class="card-text p-y-1">{prod.description}</p>
							<div className="text-right"> <Link to={"/details/"+prod.id} className="btn btn-primary ">Show Details</Link></div>
						</div>
					</div>
				</div>
    		));
    	return (
    		<div className="container">
    			<div className="row hidden-md-up">
    			{prodList}
    			</div>
    		</div>
    		);
    }
}

export default CardH;