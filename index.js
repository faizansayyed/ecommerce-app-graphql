const { ApolloServer } = require("apollo-server");
const { categories, products, reviews } = require("./db");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");

const resolvers = { Query, Category, Product }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    products, categories, reviews
  }
});

server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});
