import React, { Component } from 'react';
import axios from 'axios';
import { Slide } from 'react-slideshow-image';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
export default class ProdDisp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            price: '',
            photo: '',
            rating: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/shopkart/'+this.props.match.params.id)
            .then(response => {
                console.log(response.data.name);
                this.setState({
                    id: response.data._id,
                    name: response.data.name,
                    description: response.data.description,
                    price : response.data.price,
                    photo: response.data.photo,
                    rating: response.data.rating

                })   
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    

    onSubmit(e) {
        e.preventDefault();
        /*const obj = {
                    id: response.id,
                    name: response.name,
                    description: response.description,
                    price : response.price,
                    photo: response.photo,
                    rating: response.rating
        };
        console.log(obj);
        axios.post('http://localhost:4000/shopkart/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));*/
    }

    render() {
        const properties = {
              duration: 5000,
              transitionDuration: 500,
              infinite: true,
              indicators: true,
              arrows: true,
              onChange: (oldIndex, newIndex) => {
                console.log('slide transition from ${oldIndex} to ${newIndex}');
              }
            };

        const photo="pic";
        return (
            <div className="App">
            <div className="container">
            
            <div className="card" style={{backgroundColor: "#d1dedc"}}>
              <div className="container-fliud" >
                <div className="wrapper row">
                  <div className="preview col-md-6">
                      <Slide {...properties}>
                          <div className="each-slide">
                          <img  className="img-fluid" src={require("./images/"+photo+"1.jpg")} />
                          </div>
                          <div className="each-slide">
                          <img className="img-fluid" src={require("./images/"+photo+"2.jpg")} />
                          </div>
                          <div className="each-slide">
                            <img className="img-fluid" src={require("./images/"+photo+"3.jpg")} />
                          </div>
                        </Slide>
                      
                  </div>
                  <div className="details col-md-6">
                    <h3 className="product-title">{this.state.name}</h3>
                    <div className="rating">
                      <div className="stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <span className="review-no">41 reviews</span>
                    </div>
                    <p className="product-description">{this.state.description}</p>
                    <h4 className="price">current price: <span>{this.state.price}</span></h4>
                    <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 className="colors">colors:
                      <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                      <span className="color green"></span>
                      <span className="color blue"></span>
                    </h5>
                    <div className="action">
                      <button className="add-to-cart" type="button">add to cart</button>
                      <button className="like" type="submit"><span className="fa fa-heart"></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
            </div>
 
        )
    }
}