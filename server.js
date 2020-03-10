const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Some fake data
const books = [
  {
    id: '0',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: '1',
    title: 'The Brethren',
    author: 'John Grisham',
  },
  {
    id: '2',
    title: 'The Wedding',
    author: 'Danielle Steel',
  },
  {
    id: '3',
    title: 'The Indwelling',
    author: 'Tim LaHaye',
  },
  {
    id: '4',
    title: 'Hot Six',
    author: 'Janet Evanovich',
  },
  {
    id: '5',
    title: 'The Bear and the Dragon',
    author: 'Tom Clancy',
  },
  {
    id: '6',
    title: 'The Rescue',
    author: 'Nicholas Sparks',
  },
  {
    id: '7',
    title: 'The Last Precinct',
    author: 'Patricia Cornwell',
  },
  {
    id: '8',
    title: 'Winter\'s Heart',
    author: 'Robert Jordan',
  },
  {
    id: '9',
    title: 'The Mark',
    author: 'Jerry B. Jenkins',
  }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query {
    getBooks: [Book],
    getBookById(id: ID!): Book
  }
  type DeleteMessage {
    id: ID!,
    message: String
  }
  type Mutation {
    addBook(author: String!, title: String!): Book,
    removeBook(id: ID!): DeleteMessage,
    updateBook(id: ID!, author: String, title: String): Book
  }
  type Book {
    id: ID,
    author: String,
    title: String
  }
`;

// The resolvers
const resolvers = {
  Query: {
    getBooks: () => books,
    getBookById: (obj, { id }) => books.find((book) => book.id === id)
  },
  Mutation: {
    addBook: (obj, { author, title }) => {
      const newBook = {
        id: String(books.length),
        author,
        title
      };

      books.push(newBook);

      return newBook;
    },
    removeBook: (obj, { id }) => {
      const bookToDelete = books.find(book => book.id === id);

      if (bookToDelete) {
        const bookIndex = books.indexOf(bookToDelete);

        books.splice(bookIndex, 1);

        return { id, message: 'Book deleted successfully' };
      }

      throw new Error('No book found with that ID');
    },
    updateBook: (obj, { id, author, title }) => {
      const originalBook = books.find(book => book.id === id);
      const updatedBook = Object.assign(
        {},
        originalBook,
        {
          ...author && { author },
          ...title && { title }
        }
      );

      if (originalBook) {
        const bookIndex = books.indexOf(originalBook);

        books[bookIndex] = updatedBook;

        return updatedBook;
      }

      throw new Error('No book found with that ID');
    }
  }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', express.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql to run queries!');
});
