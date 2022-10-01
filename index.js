const { ApolloServer } = require("apollo-server");
const { categories } = require("./db");
const { products } = require("./db");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");

const resolvers = { Query, Category, Product }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    products, categories
  }
});

server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});
