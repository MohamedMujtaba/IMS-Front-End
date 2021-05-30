import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Component
import Nav from "./comp/Nav";
// CSS
import "./css/style.css";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Lectures from "./pages/Lectures";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/courses/lectures/:id" component={Lectures} />
      </Switch>
    </Router>
  );
};

export default App;
