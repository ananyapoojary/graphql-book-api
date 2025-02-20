import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { createClient } from 'graphql-ws';

// Setting up the HTTP link for queries and mutations
const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql',  // Adjust with your backend URL
});

// Setting up the WebSocket link for subscriptions
const wsLink = createClient({
  url: 'ws://localhost:5000/graphql',  // Adjust with your WebSocket URL
});

// Combine HTTP and WebSocket links using Apollo Client
const client = new ApolloClient({
  link: wsLink,  // Use WebSocket link for subscriptions
  cache: new InMemoryCache(),
});

export default client;
