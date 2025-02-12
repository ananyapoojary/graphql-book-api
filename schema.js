const { gql } = require("apollo-server-express");
const Book = require("./models/Book");
const Author = require("./models/Author");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String!
    age: Int
    books: [Book]
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    addAuthor(name: String!, age: Int): Author
    addBook(title: String!, genre: String, authorId: ID!): Book
  }
`;

const resolvers = {
  Query: {
    books: async () => await Book.find(),
    book: async (_, { id }) => await Book.findById(id),
    authors: async () => await Author.find(),
    author: async (_, { id }) => await Author.findById(id),
  },
  Mutation: {
    addAuthor: async (_, { name, age }) => {
      const author = new Author({ name, age });
      return await author.save();
    },
    addBook: async (_, { title, genre, authorId }) => {
      const book = new Book({ title, genre, authorId });
      return await book.save();
    },
  },
  Book: {
    author: async (book) => await Author.findById(book.authorId),
  },
  Author: {
    books: async (author) => await Book.find({ authorId: author.id }),
  },
};

module.exports = { typeDefs, resolvers };
