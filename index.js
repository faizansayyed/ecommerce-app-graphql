const { ApolloServer } = require("apollo-server");
const db = require("./db");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Mutation } = require("./resolvers/Mutation");

const resolvers = { Query, Category, Product, Mutation }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db
  }
});

server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});
