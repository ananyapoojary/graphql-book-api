import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';  // Import Apollo Client

ReactDOM.render(
  <ApolloProvider client={client}>  {/* Wrap App with ApolloProvider */}
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
