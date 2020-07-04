import { ApolloProvider } from '@apollo/react-hooks';
import { authLink } from '@sdk/auth';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Footer, Header, QuillEditor } from './components';
import { OverlayProvider } from './components/Overlay';
import OverlayManager from './components/OverlayManager';
import { apiUrl } from './constants';
import { AboutMe, HomePage } from './pages';
import { LoginPage } from './pages/LoginPage';



const httpLink = createHttpLink({
  uri: `${apiUrl}/graphql`,
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

cache.writeData({
  data: {},
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <OverlayProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/create">
              <QuillEditor />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
          <OverlayManager />
          <Footer />
        </OverlayProvider>
      </ApolloProvider>
    </Router>
  );
}
export default App;
