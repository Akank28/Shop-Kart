import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import test from "./test.jpg";
import book from "./book.jpg";
import { Slide } from 'react-slideshow-image';
const slides = [test,book,logo];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log('slide transition from ${oldIndex} to ${newIndex}');
  }
}

function App() {
  return (
    <div className="App">
      <div className="container">
    <div className="card" style={{backgroundColor: "#d1dedc"}}>
      <div className="container-fliud" >
        <div className="wrapper row">
          <div className="preview col-md-6">
              <Slide {...properties}>
                  <div className="each-slide">
                  <img  className="img-fluid" src={require("./test.jpg")} />
                  </div>
                  <div className="each-slide">
                  <img className="img-fluid" src={slides[1]} />
                  </div>
                  <div className="each-slide">
                    <img className="img-fluid" src={slides[2]} />
                  </div>
                </Slide>
              
          </div>
          <div className="details col-md-6">
            <h3 className="product-title">men's shoes fashion</h3>
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
            <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
            <h4 className="price">current price: <span>$180</span></h4>
            <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
            <h5 className="colors">colors:
              <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
              <span className="color green"></span>
              <span className="color blue"></span>
            </h5>
            <div className="action">
              <button className="add-to-cart" type="button">add to cart</button>
              <button className="like" type="button"><span class="fa fa-heart"></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    </div>
  );
}

export default App;
