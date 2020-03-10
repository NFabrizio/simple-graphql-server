# simple-graphql-server

This is a basic GraphQL server for familiarization with GraphQL concepts. It was
initiated with the code provided at https://www.apollographql.com/docs/apollo-server/v1/example/,
which was the initial commit for this repository. From that starting point, other
standard types and resolvers were added to allow querying a single book by its ID,
updating an existing book, adding a new book and deleting an existing book. This
server is not connected to a database. The initial data is hard coded into the
server and any new data added while using the application will not be persisted.
This application integrates the GraphQL server with the GraphiQL user interface
to allow users to explore and introspect the GraphQL server.

## Installation and Set Up  
Below are the instructions for installing this application.  
*These instructions are valid as of 2020.03.10*

### Environment Set Up  
1. Clone this repository to your local environment.  
  1. Fork this Github repo.  
    1. In a web browser, visit https://github.com/NFabrizio/simple-graphql-server  
    2. Click the Fork button in the upper right corner of the screen  
    3. In the "Where should we fork this repository?" pop up, select your username.  
    Github should create a fork of the repo in your account  
  2. Clone your fork of the simple-graphql-server repo.  
    1. In the terminal on your local environment, navigate to the directory where  
    you want to clone the simple-graphql-server repo  
      `cd ~/path/to/your/directory`  
    2. In the terminal, run:  
      `git clone [clone-url-for-your-fork]`  
      The URL should be in the format git@github.com:YourUsername/simple-graphql-server.git  

## Application Use  
1. Install the dependencies.  
  `npm install`  
2. Run the application.  
  `npm start`  
3. In a web browser on your local machine, visit the URL http://localhost:4000/graphiql.  
  This will open the GraphiQL interface which will allow you introspect, query and mutate the data. For some examples of how to perform queries and mutations in GraphQL, visit: https://building.buildkite.com/tutorial-getting-started-with-graphql-queries-and-mutations-11211dfe5d64
