import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./layout/Landing";
import Register from "./auth/Register";
import Login from "./auth/Login";
class LogApp extends Component {
  render() {
    return (
      <Router>
        <div className="LogApp">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default LogApp;