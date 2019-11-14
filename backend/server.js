const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const SRoutes = express.Router();
const PORT = 4000;
const passport = require("passport");
const users = require("./routes/api/users");
let prod = require('./product');

app.use(cors());
app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
SRoutes.route('/').get(function(req, res) {
    prod.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
});
SRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    prod.findById(id, function(err, product) {
    	if(!product)
    		res.status(404).send("data is not found");
    	else
        res.json(product);
    });
});
app.use('/shopkart', SRoutes);
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});