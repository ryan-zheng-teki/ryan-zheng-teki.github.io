import React from "react";
import { HomePage, Blogs, AboutMe } from "./pages";
import { Header, Footer, QuillEditor } from "./components";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: new HttpLink(),
  cache: cache,
});

cache.writeData({
  data: {
    
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Blogs />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/create">
              <QuillEditor />
            </Route>
          </Switch>
          <Footer/>
      </Router>
    </ApolloProvider>
  );
}
export default App;
