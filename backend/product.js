const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let product = new Schema({
    id:{
        type: String
    },
    description: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    photo: {
        type: String
    },
    rating: {
        type: Number
    }
},{
    collection:'product'
});

module.exports = mongoose.model('product', product);