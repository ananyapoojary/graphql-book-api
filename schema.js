const { gql } = require("apollo-server-express");

// Define GraphQL Schema (for now, just a simple Query)
const typeDefs = gql`
  type Query {
    message: String
  }
`;

// Define Resolvers
const resolvers = {
  Query: {
    message: () => "Hello, GraphQL!",
  },
};

module.exports = { typeDefs, resolvers };
