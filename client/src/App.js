import React from 'react';

// Apollo
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Login from './components/login/Login';
import Nav from './components/layout-components/Nav';

import Auth from './utils/auth'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}`: ''
      }
    })
  }, 
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      {Auth.loggedIn() ? (
        <>
          <h2>You are logged in</h2>
          <Nav />
        </>
      ) : (
        <Login />
      )}
    </ApolloProvider>
  );
}

export default App;
