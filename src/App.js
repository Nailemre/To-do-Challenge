import AllCards from "./AllCards/AllCards";
import Login from  "./Login/Login"
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/todo-cards">
            <AllCards />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

