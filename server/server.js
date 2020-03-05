const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Some fake data
const books = [
  {
    id: 0,
    title: "Harry Potter and the Chamber of Secrets",
    author: 'J.K. Rowling',
  },
  {
    id: 1,
    title: 'The Brethren',
    author: 'John Grisham',
  },
  {
    id: 2,
    title: 'The Wedding',
    author: 'Danielle Steel',
  },
  {
    id: 3,
    title: 'The Indwelling',
    author: 'Tim LaHaye',
  },
  {
    id: 4,
    title: 'Hot Six',
    author: 'Janet Evanovich',
  },
  {
    id: 5,
    title: 'The Bear and the Dragon',
    author: 'Tom Clancy',
  },
  {
    id: 6,
    title: 'The Rescue',
    author: 'Nicholas Sparks',
  },
  {
    id: 7,
    title: 'The Last Precinct',
    author: 'Patricia Cornwell',
  },
  {
    id: 8,
    title: 'Winter\'s Heart',
    author: 'Robert Jordan',
  },
  {
    id: 9,
    title: 'The Mark',
    author: 'Jerry B. Jenkins',
  }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query {
    books: [Book]
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
    books: () => books
  },
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
