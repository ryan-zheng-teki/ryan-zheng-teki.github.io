import * as React from "react";
import { HomePage, Blogs, AboutMe } from "./pages";
import { Header } from "./components";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
